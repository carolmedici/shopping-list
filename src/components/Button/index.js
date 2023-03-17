import './Button.css'

const Button = (props) =>{
    return ( <button className='Button'>
        {props.text}

    </button>)

}

export default Button

/*
const Button = (props) =>{
    return ( <button className='Button'>
        {props.children} <<<<<<<<<<<<

    </button>)


    >>>>> allows that in the "file.js" everything that is inside the component of the button be passed.

<button>
Content
</button>
}*/ 