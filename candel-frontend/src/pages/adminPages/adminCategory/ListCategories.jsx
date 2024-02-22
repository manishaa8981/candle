import * as React from 'react';
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ListCategories() {
    const navigate = useNavigate();
    const { data, refetch } = useQuery({
        queryKey: ["GET_CATEGORIES"],
        queryFn() {
            return axios.get("http://localhost:8081/category/getAll");
        }
    });
    const deleteByIdApi = useMutation({
        mutationKey: ["DELETE_CATEGORY_BY_ID"],
        mutationFn(id) {
            return axios.delete(`http://localhost:8081/category/delete/${id}`);
        },
        onSuccess() {
            toast.success('Category Delete Success');
            refetch();
        }
    });
    return (
        <>
            <table border={1} style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left'}}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>nAME</th>
                    <th style={{ textAlign:'center'}}>Action</th>
                </tr>
                </thead>
                <tbody>
                {data?.data.map((category) => (
                    <tr key={category.categoryId} style={{borderBottom: '1px solid #ddd'}}>
                        <td style={{wordWrap: 'break-word', maxWidth: '30px'}}>{category.categoryId}</td>

                        <td style={{wordWrap: 'break-word', maxWidth: '50px'}}>{category.name}</td>

                    <td style={{textAlign:'center'}}>
                <button onClick={() => navigate(`/dashboard/category/update/${category.categoryId}`)}>
                                <EditIcon />
                                Edit
                            </button>
                            <button onClick={() => deleteByIdApi.mutate(category.categoryId)}>
                                <DeleteIcon />
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
                <ToastContainer/>
            </table>
        </>
    );
}
export default ListCategories;