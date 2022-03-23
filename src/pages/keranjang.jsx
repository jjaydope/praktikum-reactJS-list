import React, { Component } from "react";
import $ from "jquery";
import Card from "../components/cardKeranjang"
class Keranjang extends Component {
    constructor() {
        super()
        this.state = {
            keranjang: [
                {
                    nama: "After Hour Vinyl",
                    harga: 500000,
                    jumlah: 1,
                    total: 450000,
                    gambar: "https://target.scene7.com/is/image/Target/GUEST_c8cf7126-471b-4c49-bbc8-2e6632e5b8fd?wid=488&hei=488&fmt=pjpeg"
                },
                {
                    nama: "Positions Vinyl",
                    harga: 575000,
                    jumlah: 1,
                    total: 575000,
                    gambar: "https://m.media-amazon.com/images/I/51DO9vysREL._SX355_.jpg"
                },
            ],

            action: "",
            nama: "",
            gambar: "",
            harga: 0,
            jumlah: 0,
            total: 0,
            selectedItem: null,
        }
        this.state.filterKeranjang = this.state.keranjang
    }
    render() {
        return (
            <div className="container">
                <input type="text" className="form-control my-2" placeholder="Pencarian"
                    value={this.state.keyword}
                    onChange={ev => this.setState({ keyword: ev.target.value })}
                    onKeyUp={ev => this.searching(ev)}
                />
                <div className="row">
                    {this.state.filterKeranjang.map((item, index) => (
                        <Card
                            nama={item.nama}
                            gambar={item.gambar}
                            harga={item.harga}
                            jumlah={item.jumlah}
                            total={item.harga * item.jumlah}
                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                        />
                    ))}
                </div>
                <button className="btn btn-success" onClick={() => this.Add()} >
                    Tambah Produk
                </button>

                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_keranjang">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-body">
                                Form Keranjang
                            </div>
                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama Produk
                                    <input type="text" className="form-control mb-2"
                                        value={this.state.nama}
                                        onChange={ev => this.setState({
                                            nama:
                                                ev.target.value
                                        })}
                                        required />

                                    Harga Produk
                                    <input type="number" className="form-control mb-2"
                                        value={this.state.harga}
                                        onChange={ev => this.setState({
                                            harga:
                                                ev.target.value
                                        })}
                                        required />

                                    Jumlah Produk
                                    <input type="number" className="form-control mb-2"
                                        value={this.state.jumlah}
                                        onChange={ev => this.setState({
                                            jumlah:
                                                ev.target.value
                                        })}
                                        required />

                                    Total Produk
                                    <input type="number" className="form-control mb-2"
                                        value={this.state.total}
                                        onChange={ev => this.setState({
                                            total:
                                                ev.target.value
                                        })}
                                        required />

                                    Gambar Produk
                                    <input type="url" className="form-control mb-2"
                                        value={this.state.cover}
                                        onChange={ev => this.setState({
                                            cover:
                                                ev.target.value
                                        })}
                                        required />

                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    Add = () => {
        // menampilkan komponen modal
        $("#modal_keranjang").show();
        this.setState({
            nama: "",
            gambar: "",
            harga: 0,
            jumlah: 0,
            total: 0,
            action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_keranjang").show();
        this.setState({
            nama: item.nama,
            gambar: item.gambar,
            jumlah: item.jumlah,
            harga: item.harga,
            total: item.total,
            action: "update",
            selectedItem: item
        })
    }
    Save = (event) => {
        event.preventDefault();
        // menampung data state keranjang
        let tempKeranjang = this.state.keranjang
        if (this.state.action === "insert") {
            // menambah data baru
            tempKeranjang.push({
                nama: this.state.nama,
                harga: this.state.harga,
                jumlah: this.state.jumlah,
                total: this.state.total,
                gambar: this.state.gambar,
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempKeranjang.indexOf(this.state.selectedItem)
            tempKeranjang[index].nama = this.state.nama
            tempKeranjang[index].jumlah = this.state.judul
            tempKeranjang[index].harga = this.state.harga
            tempKeranjang[index].harga = this.state.total
            tempKeranjang[index].gambar = this.state.gambar
        }
        this.setState({ keranjang: tempKeranjang })
        // menutup komponen modal_keranjang
        $("#modal_keranjang").hide();
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempKeranjang = this.state.keranjang
            // posisi index data yg akan dihapus
            let index = tempKeranjang.indexOf(item)
            // hapus data
            tempKeranjang.splice(index, 1)
            this.setState({ keranjang: tempKeranjang })
        }
    }

    searching = event => {
        if (event.keyCode === 13) {
            // 13 adalah kode untuk tombol enter
            let keyword = this.state.keyword.toLowerCase()
            let tempKeranjang = this.state.keranjang
            let result = tempKeranjang.filter(item => {
                return item.nama.toLowerCase().includes(keyword)
            })
            this.setState({ filterKeranjang: result })
        }
    }
}
export default Keranjang;