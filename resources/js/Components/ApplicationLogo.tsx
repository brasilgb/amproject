
interface LogoProps {
    width?: any;
}
 const ApplicationLogo = ({width}: LogoProps) => {
    return (
        <div className={width}>
            <img src="logo/default.png" alt="Logo" />
        </div>
    );
}
export default ApplicationLogo;