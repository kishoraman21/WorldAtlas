export const Contact = () => {

    // use to hide the submit data from the url 
    const handleFormSubmit = (formData) =>{
        const formInputData = Object.fromEntries(formData.entries());
            console.log(formInputData);
    };

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>

                    <input type="text" className="form-control" required autoComplete="off" placeholder="Enter Your Name" name="username" />

                    <input type="email" className="form-control" placeholder="Enter Your Email" name="email" required autoComplete="false" />

                    <textarea className="form-control" rows="10" placeholder="Enter Your Message"  name="message" required autoComplete="off"></textarea>

                    |<button type="submit" value="send">Send</button>
                </form>
            </div>


        </section>
    )
}