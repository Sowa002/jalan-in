const isNews = (news) => {
    return news.map((data, i) => {
        return <div key={i} className="card w-full lg:w-96 bg-white shadow-xl text-black">
        <figure>
          <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
          <head>
            <meta property="og:title" content="How to Become an SEO Expert (8 Steps)" />
            <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
            <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
          </head>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.nama}  
          </h2>
          <p>{data.desc}</p>
          <div className="">
            <a target="_blank" href={data.harga}>
              More Detail
            </a>
          </div>
          <div className="card-actions justify-end">
            <div className="badge badge-inline">{data.category}</div>
            <div className="badge badge-outline text-black">{data.author}</div>
          </div>
        </div>
      </div>
    })
}

const noNews = () => {
    return (
        <div>Saat ini Belum ada berita tersedia</div>
    )
}

const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news)
}

export default NewsList