const style = () => ({
    root: {
        textDecoration: 'none',
        width: '100%',
    },
    card: {
        height: '300px',
        position: 'relative',
        background: 'linear-gradient(45deg, rgb(129, 50, 239) 0%, rgb(32, 114, 230) 100%)',
    },
    photo: {
        width: '100%',
        objectFit: 'cover',
        height: '100%',
    },
    image: (props) => ({
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: `url(${props.photo})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }),
    bottomInfo: {
        width: '100%',
        height: '59.5px',
        background: 'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.51) 26%, rgba(0, 0, 0, 0.6) 100%)',
        padding: '0',
        position: 'absolute',
        bottom: '0px',
    },
    title: {
        height: '28px',
        color: 'rgb(255, 255, 255)',
        fontSize: '14px',
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        letterSpacing: '0.44px',
        lineHeight: '28px',
        textAlign: 'left',
        padding: '0px 17px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },

    subtitle: {
        height: '16px',
        color: 'rgb(255, 255, 255)',
        fontSize: '12px',
        fontFamily: 'Open Sans',
        fontWeight: 'normal',
        letterSpacing: '0.4px',
        lineHeight: '16px',
        textAlign: 'left',
        padding: '0px 17px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
})

export default style
