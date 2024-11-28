import "./ContactForm.css";
import Button from "../Button/Button";
import { useContext,useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../Context/AppContext";

export default function ContactForm() {

  const appContext = useContext(AppContext);  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState()
  const [formSubmitLoading, setFormSubmitLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isFormValid) {
      setFormSubmitLoading(true)
      try{
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...formData, access_key: "59d8cf88-ae70-4c74-b9b3-d2689f49d2b0"})
        })

        if(response.ok){
          setFormSubmitted(true)
        } else {
          alert("Erro ao enviar")
        }
      }catch (e){
        alert("Erro: " + e)
      } finally {
        setFormSubmitLoading(false)
      }
    }
  }

  useEffect(() => {
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
      }

    const isValid = formData.name.trim() && 
    formData.email.trim() && 
    isValidEmail(formData.email) && 
    formData.message.trim()

    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div className="contact-form d-flex fd-column al-center">
      <h2>{appContext.languages[appContext.language].contact.subtitle}</h2>
      <form onSubmit={handleSubmit}>
        <div className="d-flex form-group ">
          <input className="form-input" type="text" name="name" id="name" placeholder={appContext.languages[appContext.language].contact.pl1} 
          onChange={handleChange}/>
          <input className="form-input" type="email" name="email" id="email" placeholder={appContext.languages[appContext.language].contact.pl2}
          onChange={handleChange}/>
        </div>
        <div className="d-flex form-group">
          <textarea
            name="message"
            id="message"
            className="form-input"
            placeholder={appContext.languages[appContext.language].contact.pl3}
            rows={4}
            onChange={handleChange}
          />
        </div>
        <div className="al-center d-flex jc-end form-group">
          {formSubmitted && <p className="text-primary">{appContext.languages[appContext.language].contact.successMsg}</p>}
          <Button type="submit" buttonStyle="secondary" disabled={!isFormValid || formSubmitLoading}>
          {appContext.languages[appContext.language].general.send}
          </Button>
        </div>
      </form>
    </div>
  );
}
