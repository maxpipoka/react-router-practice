const Contact = () => {
    return(
        <div className="contact">
            <h1>Contactese con nosotros</h1>
            <form>
                <label>Nombre</label>
                <input type="text"/>
                <label>Email</label>
                <input type="text"/>
                <label>Mensaje</label>
                <textarea></textarea>
                <button>Enviar</button>
                
            </form>
        </div>
    )
};

export default Contact;