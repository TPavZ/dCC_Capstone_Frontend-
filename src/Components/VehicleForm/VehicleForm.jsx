import React, { useState } from "react"

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

    function handleSubmit(el) {
        el.preventDefault();
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


    return (
        <div>
            <form onSubmit={handleSubmit} className="vehicle-form">
                <label><strong>Add Vehicle</strong></label>
                <input name="vin" type="text" onChange={(el) => setVin(el.target.value)} value={vin} placeholder="VIN Number"></input>
                <input name="year" type="text" onChange={(el) => setYear(el.target.value)} value={year} placeholder="Year"></input>
                <input name="make" type="text" onChange={(el) => setMake(el.target.value)} value={make} placeholder="Make"></input>
                <input name="model" type="text" onChange={(el) => setModel(el.target.value)} value={model} placeholder="Model"></input>
                <input name="trim" type="text" onChange={(el) => setTrim(el.target.value)} value={trim} placeholder="Trim"></input>
                <select id="dropdown" name="engine_size" type="text" onChange={(el) => setEngineSize(el.target.value)} value={engineSize}>
                    <option placeholder="engine_size">Engine Size</option>
                    <option value="4 Cylinder">4 Cylinder</option>
                    <option value="6 Cylinder">6 Cylinder</option>
                    <option value="8 Cylinder">8 Cylinder</option>
                    <option value="10 Cylinder">10 Cylinder</option>
                    <option value="12 Cylinder">12 Cylinder</option>
                    <option value="Other">Other</option>
                </select>
                <select id="dropdown" name="transmission_type" type="text" onChange={(el) => setTransmissionType(el.target.value)} value={transmissionType}>
                    <option placeholder="transmission_type">Transmission</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="CVT">CVT</option>
                </select>
                <select id="dropdown" name="drive_type" type="text" onChange={(el) => setDriveType(el.target.value)} value={driveType}>
                    <option placeholder="drive_type">Drive Type</option>
                    <option value="AWD">AWD</option>
                    <option value="4WD">4WD</option>
                    <option value="FWD">FWD</option>
                    <option value="RWD">RWD</option>
                </select>
                <select id="dropdown" name="fuel_type" type="text" onChange={(el) => setFuelType(el.target.value)} value={fuelType}>
                    <option placeholder="fuel_type">Fuel Type</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Other">Other</option>
                </select>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
export default VehicleForm;