import React, { Component } from "react";
import $ from "jquery";
import Card from "../components/cardAgenda"
class Agenda extends Component {
    constructor() {
        super()
        this.state = {
            agenda: [
                {
                    nama: "Hari Bumi",
                    tanggal: "02 04 2022",
                    lokasi: "Kebun Raya Bogor",

                },
                {
                    nama: "Hari Laut",
                    tanggal: "08 06 2022",
                    lokasi: "Teluk Bali",
                },
                {
                    nama: "Hari Fauna",
                    tanggal: "05 11 2022",
                    lokasi: "Cagar Alam Sumatra",
                },
                {
                    nama: "Hari flora",
                    tanggal: "03 03 2022",
                    lokasi: "Cagar Alam Kalimantan",
                },
            ],

            action: "",
            nama: "",
            tanggal: "",
            lokasi: "",
            selectedItem: null,
        }
    }
    render() {
        return (

            <div className="container">
                <div className="mb-4 text-xl font-semibold">AGENDA LINGKUNGAN HIDUP</div>;
                <div className="row">
                    {this.state.agenda.map((item, index) => (
                        <Card
                            nama={item.nama}
                            tanggal={item.tanggal}
                            lokasi={item.lokasi}
                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                        />
                    ))}
                </div>

                <button className="btn btn-success" onClick={() => this.Add()}>

                    Tambah Agenda
                </button>
                {/* component modal sbg control manipulasi data */}
                <div className="modal" id="modal_agenda">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Agenda
                            </div>
                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Nama Agenda

                                    <input type="text" className="form-control mb-2"

                                        value={this.state.nama}
                                        onChange={ev => this.setState({
                                            nama:
                                                ev.target.value
                                        })}
                                        required />

                                    Tanggal
                                    <input type="date" className="form-control mb-2"

                                        value={this.state.tanggal}
                                        onChange={ev => this.setState({
                                            tanggal: ev.target.value
                                        })}
                                        required />

                                    Lokasi

                                    <input type="text" className="form-control mb-2"

                                        value={this.state.lokasi}
                                        onChange={ev => this.setState({
                                            lokasi:
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
        $("#modal_agenda").show();
        this.setState({
            nama: "",
            tanggal: "",
            lokasi: "",
            action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_agenda").show();
        this.setState({
            nama: item.nama,
            tanggal: item.tanggal,
            lokasi: item.lokasi,
            action: "update",
            selectedItem: item
        })
    }
    Save = (event) => {
        event.preventDefault();
        // menampung data state agenda
        let tempAgenda = this.state.agenda
        if (this.state.action === "insert") {
            // menambah data baru
            tempAgenda.push({
                nama: this.state.nama,
                tanggal: this.state.tanggal,
                lokasi: this.state.lokasi,
            })
        } else if (this.state.action === "update") {
            // menyimpan perubahan data
            let index = tempAgenda.indexOf(this.state.selectedItem)
            tempAgenda[index].nama = this.state.nama
            tempAgenda[index].tanggal = this.state.tanggal
            tempAgenda[index].lokasi = this.state.lokasi
        }
        this.setState({ agenda: tempAgenda })
        // menutup komponen modal_agenda
        $("#modal_agenda").hide();
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempAgenda = this.state.agenda
            // posisi index data yg akan dihapus
            let index = tempAgenda.indexOf(item)
            // hapus data
            tempAgenda.splice(index, 1)
            this.setState({ agenda: tempAgenda })
        }
    }

}
export default Agenda;