import React, {Fragment} from 'react';
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorHandler.module.css'

const ErrorHandler = props => {
    return (
        <Fragment>
            <div className={classes.backdrop}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onCliked={props.onConfirm}>Okey</Button>
                </footer>
            </Card>
        </Fragment>
    );
};

export default ErrorHandler;
