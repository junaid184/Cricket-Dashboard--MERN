import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const dev = "http://localhost:5001"
export const baseUrl = window.location.hostname.split(":")[0] === "localhost" ? dev : "";
function Admin() {
    return(
        <div>
        <h1>Sign Up</h1>
        <Formik
            initialValues={{
                tournament: '',
                date: '',
                inning: '',
                teamOne: '',
                teamTwo: '',
                scoreOne: '',
                wicketsOne: '',
                scoreTwo: '',
                wicketsTwo: '',
                oversOne: '',
                overTwo: '',
                batsmanOne: '',
                batsmanTwo: '',
                bowlerOne: '',
                bowlerTwo: '',
                toss: '',
                headline: ''
            }}
            onSubmit={(values) => {

                axios.post(`${baseUrl}/api/v1/cricket`, {
                    tournament: values.tournament,
                    date: values.date,
                    inning: values.inning,
                    teamOne: values.teamOne,
                    teamTwo: values.teamTwo,
                    scoreOne: values.scoreOne,
                    wicketsOne: values.wicketsOne,
                    scoreTwo: values.scoreTwo,
                    wicketsTwo: values.wicketsTwo,
                    oversOne: values.oversOne,
                    overTwo: values.overTwo,
                    batsmanOne: values.batsmanOne,
                    batsmanTwo: values.batsmanTwo,
                    bowlerOne: values.bowlerOne,
                    bowlerTwo: values.bowlerTwo,
                    toss: values.toss,
                    headline: values.headline
                })
                    .then((res) => {
                        console.log("res: ", res.data);
                    })
            }}
        >
            <Form>
                <label htmlFor="tournament">Tournament</label>
                <Field id="tournament" name="tournament" placeholder="Tournament" />

                <label htmlFor="inning">Inning</label>
                <Field id="inning" name="inning" placeholder="Inning" />

                <label htmlFor="date">Date</label>
                <Field
                    id="date"
                    name="date"
                    placeholder="date"
                    type="date"
                />

                <label htmlFor="teamOne">Team One</label>
                <Field id="teamOne" name="teamOne" placeholder="Team One" />

                <label htmlFor="teamTwo">Team Two</label>
                <Field id="teamTwo" name="teamTwo" placeholder="Team Two" />

                <label htmlFor="scoreOne">Score One</label>
                <Field id="scoreOne" name="scoreOne" placeholder="Score One" />

                <label htmlFor="wicketsOne">Wickets One</label>
                <Field id="wicketsOne" name="wicketsOne" placeholder="Wickets One" />

                <label htmlFor="scoreTwo">Score Two</label>
                <Field id="scoreTwo" name="scoreTwo" placeholder="Score Two" />

                <label htmlFor="wicketsTwo">Wickets Two</label>
                <Field id="wicketsTwo" name="wicketsTwo" placeholder="Wickets Two" />

                <label htmlFor="batsmanOne">batsman One</label>
                <Field id="batsmanOne" name="batsmanOne" placeholder="batsman One" />

                <label htmlFor="batsmanTwo">batsman Two</label>
                <Field id="batsmanTwo" name="batsmanTwo" placeholder="batsman Two" />

                <label htmlFor="bowlerOne">bowler One</label>
                <Field id="bowlerOne" name="bowlerOne" placeholder="bowler One" />

                <label htmlFor="bowlerTwo">bowler Two</label>
                <Field id="bowlerTwo" name="bowlerTwo" placeholder="bowler Two" />

                <label htmlFor="toss">toss</label>
                <Field id="toss" name="toss" placeholder="toss" />

                <label htmlFor="oversOne">Overs One</label>
                <Field id="oversOne" name="oversOne" placeholder="Overs One" />

                <label htmlFor="overTwo">Overs Two</label>
                <Field id="overTwo" name="overTwo" placeholder="Overs Two" />

                <label htmlFor="headline">headline</label>
                <Field id="headline" name="headline" placeholder="headline" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
    )
    
}
export default Admin;