import "./links.module.css"

const Links = ({children, Link})=>{
return(
<li>
    <a href={Link} target="_blank">{children}</a>
</li>
);
};

export default Links;