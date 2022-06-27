import PropTypes from 'prop-types';

const MainLayout = ({children, isForm}) => {
    return (
        <div className={`mt-6 p-5 ${isForm ? 'flex flex-row justify-center content-center' : ''}`}>
            {isForm ? (
                <div className={'w-72'}>
                    {children}
                </div>
            ): children}
        </div>
    )
};

export default MainLayout;

MainLayout.propTypes = {
    isForm: PropTypes.bool,
}

MainLayout.defaultProps = {
    isForm: false,
};