import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

function DeptDesc() {
    let { deptId } = useParams();
    let [dept, setDept] = useState(null)

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    'http://localhost:3000/api/depts/'+deptId
                )
            ).json();

            setDept(data);
        };

        dataFetch();
    }, [deptId]);

    if (!dept) return 'loading';

    return (
        <main>
            <h2>DEPT DESC</h2>
            <table className="table-list desc-table">
                <tbody>
                <tr>
                    <td title="Name:">
                        {dept.name}
                    </td>
                </tr>
                <tr>
                    <td title="Adress:">
                        {dept.adress}
                    </td>
                </tr>
                <tr>
                    <td title="Email:">
                        {dept.email}
                    </td>
                </tr>

                </tbody>

            </table>

            <Link className="btn" to={`/dept/`}>
                Cancel
            </Link>
            <Link className="btn" to={`/dept/edit/${dept.name}`}>
                Edit
            </Link>

        </main>
    );
}

export default DeptDesc;