import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NewsList from '@/Components/Homepage/NewsList';
import Paginator from '@/Components/Homepage/Paginator';

export default function Homepage(props) {
    return (
        <div className='min-h-screen bg-base-100'>
            <Head title={props.title} />
            <Navbar />
            <div className='flex justify-center flex-col lg:flex-row  lg:flex-wrap lg:items-stretch items-center gap-4'>
                <NewsList news={props.news.data}/>
            </div>
            <div className='flex justify-center items-center'>
                <Paginator meta={props.news.meta}/>
            </div>
        </div>
    )
}