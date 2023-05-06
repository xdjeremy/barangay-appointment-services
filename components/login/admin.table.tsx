import React, {FC} from 'react';
import AdminTableItems from "@/components/admin.table.items";


const AdminTable: FC = () => {
    return (
        <div>
            <h1 className={'text-5xl text-black font-bold text-right px-4 pt-3.5 pb-20'}>
                DOCUMENTS
            </h1>
            <table className={"text-2xl table-fixed text-black w-full justify-items-center px-6 py-6 "}>
                <thead>
                <tr>
                    <th className={"border-2 border-black text-center"}> Requested Document</th>
                    <th className={"border-2 border-black text-center"}> Name</th>
                    <th className={"border-2 border-black text-center"}> Email</th>
                    <th className={"border-2 border-black text-center"}> Validate</th>
                </tr>
                </thead>
                <tbody>
                <AdminTableItems docs={'Barangay Clearance'} name={'Aaron Marcasig'} email={'aaronmarcasig@gmail.com'} validate={}/>
                <AdminTableItems docs={'Barangay Clearance'} name={'Aaron Marcasig'} email={'aaronmarcasig@gmail.com'} validate={}/>
                <AdminTableItems docs={'Barangay Clearance'} name={'Aaron Marcasig'} email={'aaronmarcasig@gmail.com'} validate={}/>
                <AdminTableItems docs={'Barangay Clearance'} name={'Aaron Marcasig'} email={'aaronmarcasig@gmail.com'} validate={}/>
                <AdminTableItems docs={'Barangay Clearance'} name={'Aaron Marcasig'} email={'aaronmarcasig@gmail.com'} validate={}/>
                <AdminTableItems docs={'Barangay Clearance'} name={'Aaron Marcasig'} email={'aaronmarcasig@gmail.com'} validate={}/>
                <AdminTableItems docs={'Barangay Clearance'} name={'Aaron Marcasig'} email={'aaronmarcasig@gmail.com'} validate={}/>
                <AdminTableItems docs={'Barangay Clearance'} name={'Aaron Marcasig'} email={'aaronmarcasig@gmail.com'} validate={}/>
                <AdminTableItems docs={'Barangay Clearance'} name={'Aaron Marcasig'} email={'aaronmarcasig@gmail.com'} validate={}/>
                <AdminTableItems docs={'Barangay Clearance'} name={'Aaron Marcasig'} email={'aaronmarcasig@gmail.com'} validate={}/>
                <AdminTableItems docs={'Barangay Clearance'} name={'Aaron Marcasig'} email={'aaronmarcasig@gmail.com'} validate={}/>
                <AdminTableItems docs={'Barangay Clearance'} name={'Aaron Marcasig'} email={'aaronmarcasig@gmail.com'} validate={}/>
                </tbody>
            </table>
        </div>
    );
};

export default AdminTable;