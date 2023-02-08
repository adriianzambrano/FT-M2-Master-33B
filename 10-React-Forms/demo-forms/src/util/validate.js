
const validate = (form, setErrors, errors)=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)){ // EXPRESION REGULAR SIGNIF: TEXTO@TEXTO.COM
      console.log("esta todo bien")
      setErrors({...errors, email: ""})
    }else{
      console.log("esta maaaaaaal");
      setErrors({...errors, email: "Datos Invalidos"})
    }
  }

  export default validate;