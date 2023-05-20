import { usePage } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Link, Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

export default function Dashboard({ auth }) {
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false)
    const props = usePage().props;
    const { flash } = props;

    const handleSubmit = () => {
        const data= {
            nama, harga, desc, category
        }
        Inertia.post('/news', data)
        setIsNotif(true)
        setNama('')
        setHarga('')
        setDesc('')
        setCategory('')
    }

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get('/news')
        }
        return;
    }, [])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {isNotif && <div className="alert alert-success shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{flash.message}</span>
                                </div>
                            </div>
                            }
                            <input type="text" placeholder="Nama Tempat" className="m-2 input input-bordered w-full bg-white" onChange={(nama)=>setNama(nama.target.value)} value={nama}/>
                            <input type="text" placeholder="Estimasi Harga" className="m-2 input input-bordered w-full bg-white" onChange={(harga)=>setHarga(harga.target.value)} value={harga}/>
                            <input type="text" placeholder="Deskripsi" className="m-2 input input-bordered w-full bg-white" onChange={(desc)=>setDesc(desc.target.value)} value={desc}/>
                            <input type="text" placeholder="Kategori" className="m-2 input input-bordered w-full bg-white" onChange={(category)=>setCategory(category.target.value)} value={category}/>
                            <button className='btn btn-primary m-2' onClick={() => handleSubmit()}>SUBMIT</button>
                        </div>
                </div>
                <div className="p-4">
                {props.myNews && props.myNews.length > 0 ? props.myNews.map((news, i) => {
                        return (
                    <div key={i} className="card w-full lg:w-96 bg-white shadow-xl text-black m-2 ">
                        <div className="card-body">
                            <h2 className="card-title">
                                {news.nama}
                                <div className="badge badge-secondary">{news.harga}</div>
                            </h2>
                            <p>{news.desc}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-inline">{news.category}</div>
                                <div className="badge badge-outline">
                                    <Link href={route('edit.news')} method="get" data={{id: news.id}} as="button">
                                    edit
                                    </Link>
                                    </div>
                                <div className="badge badge-outline">
                                    <Link href={route('delete.news')} method="post" data={{id: news.id}} as="button">
                                    delete
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }) : <p>anda belum memiliki berita</p>}  
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
