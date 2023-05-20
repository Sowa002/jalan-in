const isNews = (news) => {
    return news.map((data, i) => {
        return <div key={i} className="card w-full lg:w-96 bg-white shadow-xl text-black">
        <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.nama}
            <div className="badge badge-secondary">{data.harga}</div>
          </h2>
          <p>{data.desc}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-inline">{data.category}</div>
            <div className="badge badge-outline">{data.author}</div>
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