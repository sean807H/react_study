function PropStudy(props){
    // props => { hello:"world" }
    // props => { hello:"world", mynum: 100, obj: [1, 2, 3]}

    const o = { a:100 }
    return <div>
        {props.hello} {props.mynum} {props.obj} {JSON.stringify(o)} {o.a}

    </div>
}

export default PropStudy