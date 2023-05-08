import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Navbar/navbar'


const Scraper = () => {
    const [pdfText, setPdfText] = useState('');
    const [newtext, setNewText] = useState('');

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/v1/upload', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to extract text from PDF');
            }
            const data = await response.text();
            //console.log(data)
            setPdfText(data);
        } catch (error) {
            console.error(error);
        }
    };
    //console.log(newtext)
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/v1/uploadtext', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: pdfText
            })
        }).then(res => res.json())
        .then(() => {
            alert('Data Saved')
            setPdfText('')
            //console.log(pdfText)
            window.location.reload()
        }).catch(e => console.log(e))
    }


    return (

        <>
            <Navbar />
            <div className='container w-50'>
                <p className='fs-3 fw-bold text-center mt-4'>Document Scraper</p>
                <div className="input-group">
                    <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={handleFileUpload} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-4">
                        <label className='fs-6 fw-bolder'>Display Content:</label>
                        <textarea className="form-control mt-3" id="exampleTextarea" rows="10" value={pdfText} readOnly/>
                    </div>
                    <div className='mt-4'>
                        <div className='row'>
                            <div className='col d-flex justify-content-center'>
                                <button className="btn btn-outline-danger shadow fs-5 fw-400 ps-5 pe-5">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
}

export default Scraper