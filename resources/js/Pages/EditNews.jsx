import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';

export default function EditNews(props) {
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data= {
            id: props.myNews.id, nama, harga, desc, category
        }
        Inertia.post('/news/update', data)
        setNama('')
        setHarga('')
        setDesc('')
        setCategory('')
    }

    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title} />
            <Navbar user={props.auth.user} /> 
                    <div className="card w-full lg:w-96 bg-white shadow-xl text-black m-2">
                        <div className='p-4 text-2xl'>EDIT</div>
                        <div className="card-body">
                        <input type="text" placeholder="Nama Tempat" className="m-2 input input-bordered w-full bg-white" onChange={(nama)=>setNama(nama.target.value)} defaultValue={props.myNews.nama}/>
                            <input type="text" placeholder="Estimasi Harga" className="m-2 input input-bordered w-full bg-white" onChange={(harga)=>setHarga(harga.target.value)} defaultValue={props.myNews.harga}/>
                            <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered w-full bg-white" onChange={(desc)=>setDesc(desc.target.value)} defaultValue={props.myNews.desc}/>
                            <input type="text" placeholder="Kategori" className="m-2 input input-bordered w-full bg-white" onChange={(category)=>setCategory(category.target.value)} defaultValue={props.myNews.category}/>
                            <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>SUBMIT</button>
                        </div>
                    </div>
        </div>
    )
}