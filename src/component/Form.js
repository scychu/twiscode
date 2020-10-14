import React,{useEffect,useState} from 'react'
import logo from '../images/logo.png';
import Modal from './Modal';

export default function Form() {
    const [code, setCode] = useState([]);
    const [modal, setModal] = useState(false);

    // const componentDidMount= (){
    //     nationCode()
    // }
    
    const nationCode = async ()=> {
        // let values = document.getElementById('#tes').value;
        // console.log(this.state.input)
        await fetch(`https://restcountries.eu/rest/v2/all`, {
          method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            setCode(data)
          console.log('Success:', data);
          console.log(code)
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }
      const submitForm = (e)=> {
          e.preventDefault()
        setModal(true)
      }


    const opCode = code.map((code,index)=>
        <option key={index-1}>{code.name}</option>
        )


    const day = []
    for(let i=1;i<32;i++){
        day.push(i)
    }
    const year = []
    for(let i=90;i>0;i--){
        year.push(2021-i)
    }
    const opYear = year.map((year,index)=> <option key={index}>{year}</option>)
    const opDay = day.map((day,index)=> <option key={index+1}>{day}</option>)

    return (
        <div className="form-container">
            {modal? <Modal />:""}
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="lang">
                    Language: English
                </div>
            </div>
            <p className="notif">You don't have an account yet, please create a new account</p>
            <div className="form">
                <h3>Create new account</h3>
                <form>
                <div>
                    <h4>Title</h4>
                    <input type="checkbox" id="gridCheck1"/>
                    <label for="gridCheck1">Mrs</label>
                    <input type="checkbox" id="gridCheck2"/>
                    <label for="gridCheck2">Ms</label>
                    <input type="checkbox" id="gridCheck3"/>
                    <label for="gridCheck3">Mdm</label>
                    <input type="checkbox" id="gridCheck4"/>
                    <label for="gridCheck4">Mr</label>
                    <input type="checkbox" id="gridCheck5"/>
                    <label for="gridCheck5">Dr</label>
                </div>
                    <div className="full-name">
                        <div className="last">
                            <h4>Last name</h4>
                            <span>*</span>
                            <input type="text" placeholder="Last name"/>
                        </div>
                        <div className="first">
                            <h4>First name</h4>
                            <span>*</span>
                            <input type="text"placeholder="First name"/>
                        </div>
                    </div>
                    <h4>Mobile phone number</h4>
                    <span>*</span>
                    <div>
                    <select className="phoneCountry" onClick={nationCode}>
                        <option value="choose" selected>Select Country</option>
                        {opCode}
                    </select>
                    {/* <divut disabled defaulValue="62">{code ==[] ? "+62": "+62"}</input> */}
                    {/* <p>{code.length===null ? "+62": code.callingCodes[0]}</p> */}
                    <input type="tel" placeholder="Mobile phone number"/>
                    </div>
                    <h3>Address</h3>
                    <h4>Address</h4>
                    <input type="text" placeholder="Address"/>
                    <div className="detail-location">
                        <div className="country1">
                            <h4>Country/Location</h4>
                            <span>*</span>
                            <select className="country" id="country" name="country">
                                <option value="choose" selected>Select Country/Location</option>
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                        </div>
                        <div className="country2">
                            <h4>Province/District</h4>
                            <select className="province" id="province" name="province">
                                <option value="choose" selected>Province/District</option>
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                        </div>
                    </div>
                    <h3>Contacts</h3>
                    <div className="personal">
                        <div className="email">
                            <h4>Email Address</h4>
                            <span>*</span>
                            <input type="email"/>
                        </div>
                        <div className="birthday">
                            <div className="date">
                                <h4>Date of birth</h4>
                                <span>*</span>
                                <select id="day" name="day" defaultValue="DD">
                                    <option disabled>DD</option>
                                    {opDay}
                                </select>
                                <div className="tooltip2">Indulge in birthday treats just for you!</div>
                            </div>
                            <div className="month">
                                <h4>Month</h4>
                                <span>*</span>
                                <select id="month" name="month">
                                    <option selected disabled>MM</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                            </div>
                            <div className="year">
                                <h4>Year</h4>
                                {/* <input type="number"/> */}
                                <select id="year" name="year">
                                    <option selected disabled>YYYY</option>
                                    {opYear}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="policy">
                        <h3>Standard Privacy Note</h3>
                        <ul className="policies">
                            <li>
                                I warrant that the above information is true and correct. I understand that failure to answer all questions listed in this application form may prevent L'OCCITANE from processing my application;
                                and L"OCCITANE may refuse to accept this application in the right of my individual circumstance.
                            </li>
                            <li>
                                I understand that the information collected will be used and retained by L'OCCITANE for the purpose of (i) my application of membership program of L'OCCITANE (ii) providing member-exclusive services;
                                and (iii) the daily management operation and maintenance of membership account at L'OCCITANE.
                            </li>
                            <li>
                                I understand that it is necessary for me to provide L'OCCITANE with data in connection with the privilege. Failure to provide such data may result in L'OCCITANE stores or official website.
                            </li>
                            <li>
                                L'OCCITANE reserves the right to change any of the terms and conditions without prior notice. Changes will be posted on signage placed at L'OCCITANE stores or official website.
                            </li>
                            <li>
                                I understand that L'OCCITANE may use my personal information for the purpose of providing or promoting services/products made available by L'OCCITANE. To choose whether to receive any promotional information sent by L'OCCITANE,please tick the box below.
                            </li>
                            <li>
                                I want to receive information or communication from L'OCCITANE.
                            </li>
                        </ul>
                        <div className="toggles">
                            <div className="sms toggle">
                                SMS & Mobile Call
                                <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="emailing toggle">
                                Emailing
                                <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="mailing toggle">
                                Mailing
                                <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        <div className="tooltip">Subscribe to SMS & mobile call, Email & Mailing to receive updates about your membership perks and exclusive promotions!</div>
                        </div>
                        <input type="checkbox" id="gridCheck6"/>
                        <label for="gridCheck6">I have read and understand the above term and condition and hereby that i will be bounded by these conditions and policies once I have submitted this application form.</label>
                    </div>
                    <button className="create" onClick={submitForm}>CREATE CUSTOMER</button>
                </form>
            </div>
        </div>
    )
}
