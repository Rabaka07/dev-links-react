import "./footer.module.css"

const Footer =({children, Link})=>{
    return(
        <footer>
            <p>
                Feito com<ion-icon name="heart"/> por{" "}
                <a href={Link} target="_blank" >{children}</a>
                </p>
        </footer>
    );
};

export default Footer;