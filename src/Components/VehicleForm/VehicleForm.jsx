import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom";
import "./VehicleForm.css"
import Button from "react-bootstrap/Button";

const VehicleForm = (props) => {
    const [vin, setVin] = useState("");
    const [year, setYear] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [trim, setTrim] = useState("");
    const [engineSize, setEngineSize] = useState("");
    const [transmissionType, setTransmissionType] = useState("");
    const [driveType, setDriveType] = useState("");
    const [fuelType, setFuelType] = useState("");
    const { state } = useLocation();


    function resetForm() {
        setVin("");
        setYear("");
        setMake("");
        setModel("");
        setTrim("");
        setEngineSize("");
        setTransmissionType("");
        setDriveType("");
        setFuelType("");
    }

    function handleSubmit(e) {
        e.preventDefault();
        let vehicleInfo = {
            "vin": vin,
            "year": year,
            "make": make,
            "model": model,
            "trim": trim,
            "engine_size": engineSize,
            "transmission_type": transmissionType,
            "drive_type": driveType,
            "fuel_type": fuelType,
        }
        props.add_vehicle(vehicleInfo);
        resetForm();
    }

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <div className="veh-form">
            <form onSubmit={handleSubmit} className="vehicle-form">
                <label><strong>Add Vehicle</strong></label>
                <div className="inputs"><input name="vin" type="text" onChange={(e) => setVin(e.target.value)} value={vin} placeholder="VIN Number"></input></div>
                <div className="inputs"><input name="year" type="text" onChange={(e) => setYear(e.target.value)} value={year} placeholder="Year"></input></div>
                <div className="inputs"><input name="make" type="text" onChange={(e) => setMake(e.target.value)} value={make} placeholder="Make"></input></div>
                <div className="inputs"><input name="model" type="text" onChange={(e) => setModel(e.target.value)} value={model} placeholder="Model"></input></div>
                <div className="inputs"><input name="trim" type="text" onChange={(e) => setTrim(e.target.value)} value={trim} placeholder="Trim"></input></div>
                <div className="inputs"><select id="dropdown" name="engine_size" type="text" onChange={(e) => setEngineSize(e.target.value)} value={engineSize}>
                    <option placeholder="engine_size">Engine Size</option>
                    <option value="4 Cylinder">4 Cylinder</option>
                    <option value="6 Cylinder">6 Cylinder</option>
                    <option value="8 Cylinder">8 Cylinder</option>
                    <option value="10 Cylinder">10 Cylinder</option>
                    <option value="12 Cylinder">12 Cylinder</option>
                    <option value="Other">Other</option>
                </select></div>
                <div className="inputs"><select id="dropdown" name="transmission_type" type="text" onChange={(e) => setTransmissionType(e.target.value)} value={transmissionType}>
                    <option placeholder="transmission_type">Transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="CVT">CVT</option>
                </select></div>
                <div className="inputs"><select id="dropdown" name="drive_type" type="text" onChange={(e) => setDriveType(e.target.value)} value={driveType}>
                    <option placeholder="drive_type">Drive Type</option>
                    <option value="AWD">AWD</option>
                    <option value="4WD">4WD</option>
                    <option value="FWD">FWD</option>
                    <option value="RWD">RWD</option>
                </select></div>
                <div className="inputs"><select id="dropdown" name="fuel_type" type="text" onChange={(e) => setFuelType(e.target.value)} value={fuelType}>
                    <option placeholder="fuel_type">Fuel Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Other">Other</option>
                </select></div>
                <Button type="submit" variant="outline-light" onClick={handleSubmit}>Submit</Button>
                <Link to="/dashboard">
                    <Button type="button" variant="outline-light">Back</Button>
                </Link>
            </form>
        </div>
    );
}
export default VehicleForm;