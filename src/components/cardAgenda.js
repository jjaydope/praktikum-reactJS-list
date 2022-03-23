import React from "react"
class Card extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">

                        {/* menampilkan deskripsi */}
                        <div className="col-7">
                            <h5 className="text-info">
                                Nama Event: {this.props.nama}
                            </h5>

                            <h6 className="text-dark">
                                Tanggal: {this.props.tanggal}
                            </h6>

                            <h6 className="text-dark">
                                Lokasi: {this.props.lokasi}
                            </h6>

                            {/* button untuk mengedit */}
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={this.props.onEdit}>
                                Edit
                            </button>
                            {/* button untuk menghapus */}
                            <button class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={this.props.onDrop}>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}
export default Card;