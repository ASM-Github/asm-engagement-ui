import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import XLSX from 'xlsx'
import Preview from './Preview';

function CardLayout() {

    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);

    const [excelData, setExcelData] = useState(null);

    const fileType = ['application/vnd.ms-excel'];
    const handleFile = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFileError(null);
                    setExcelFile(e.target.result);
                    console.log(e.target.result)
                }
            }
            else {
                setExcelFileError('Please select only excel file types');
                setExcelFile(null);
            }
        }
        else {
            console.log('plz select your file');
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data);
            console.log(data)
        }
        else {
            setExcelData(null);
        }
    }
    return (
        <Row>
            <Col md={6}>
                <Card className="border-0">
                    <Card.Header className="">
                        <h4 className="mb-0 py-2">
                            Import Participants
                        </h4>
                    </Card.Header>
                    <Card.Body>
                        <form className='form-group' autoComplete="off">
                            <div className="mb-3">
                                <label for="programName" className="form-label fw-bold">
                                    Program Name
                                </label>
                                <div>
                                    <input type="text" className="form-control"
                                        placeholder="Enter a program name" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="startDate" className="form-label fw-bold">
                                    Start Date
                                </label>
                                <div>
                                    <input type="date" className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="endDate" className="form-label fw-bold">
                                    End Date
                                </label>
                                <div>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>

                            <label className="form-label fw-bold">
                                Upload participants <span className="fw-normal text-danger">*xls only</span>
                            </label>
                            <Row>
                                <div className="col-10">
                                    <input type='file' className='form-control'
                                        onChange={handleFile} required></input>
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-primary"
                                        onClick={handleSubmit}>
                                        Preview
                                    </button>
                                </div>
                            </Row>
                            {excelFileError && <div className='text-danger'
                                style={{ marginTop: 5 + 'px' }}>{excelFileError}</div>}
                            <div className="d-flex justify-content-end mt-4">
                                <button type='submit' className='btn btn-primary px-5'
                                    style={{ marginTop: 5 + 'px' }}>Save</button>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="border-0">
                    <Card.Header>
                        <div className="d-flex align-items-center">
                            <h4 className="mb-0 py-2">
                                Preview Participant
                            </h4>
                            {excelData &&
                                <div>
                                    <span className="badge bg-primary rounded-pill ms-3 fw-normal">
                                        {`${excelData.length} participants`}
                                    </span>
                                </div>
                            }
                        </div>
                    </Card.Header>
                    <Card.Body>
                        {excelData ? <Preview data={excelData} />
                            :
                            <p className="text-center text-black-50 py-5">
                                No preview available.
                            </p>
                        }

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default CardLayout
