import React, { useEffect, useState } from 'react';
import axios from 'axios';

const dev = "http://localhost:5001"
export const baseUrl = window.location.hostname.split(":")[0] === "localhost" ? dev : "";
function Admin() {
    const [fields, setFields] = useState({
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
    })
    const submit = () => {
    
            axios.post(`${baseUrl}/api/v1/cricket`, fields)
                .then((res) => {
                    console.log("res: ", res.data);
                })
                .catch((e) => {
                    console.log(e.message)
                })
    }
    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/posts`)
            .then((res) => {
                console.log(res.data);
                setFields(res.data)
            })
            .catch((e) => {
                console.log(e.message)
            })
        return () => {
            console.log('cleanup')
        }
    }, [])
    return (
        <div>
            <h1>Sign Up</h1>
            
                <label htmlFor="tournament">Tournament</label>
                <input value={fields.tournament} id="tournament" name="tournament" placeholder="Tournament"
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, tournament: e.target.value }
                        })
                    }
                }
                />

                <label htmlFor="inning">Inning</label>
                <input value={fields.inning} id="inning" name="inning" placeholder="Inning"
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, inning: e.target.value }
                        })
                    }
                } />

                <label htmlFor="date">Date</label>
                <input value={fields.date}
                    id="date"
                    name="date"
                    placeholder="date"
                    type="date"
                    onChange={
                        (e)=>{
                            setFields((perv)=>{
                                return {...perv, date: e.target.value }
                            })
                        }
                    }
                />

                <label htmlFor="teamOne">Team One</label>
                <input value={fields.teamOne} id="teamOne" name="teamOne" placeholder="Team One"
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, teamOne: e.target.value }
                        })
                    }
                } />

                <label htmlFor="teamTwo">Team Two</label>
                <input value={fields.teamTwo} id="teamTwo" name="teamTwo" placeholder="Team Two" 
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, teamTwo: e.target.value }
                        })
                    }
                }/>

                <label htmlFor="scoreOne">Score One</label>
                <input type="number" onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, scoreOne: e.target.value }
                        })
                    }
                } value={fields.scoreOne} id="scoreOne" name="scoreOne" placeholder="Score One" />

                <label htmlFor="wicketsOne">Wickets One</label>
                <input value={fields.wicketsOne} id="wicketsOne" name="wicketsOne" placeholder="Wickets One"
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, wicketsOne: e.target.value }
                        })
                    }
                } />

                <label htmlFor="scoreTwo">Score Two</label>
                <input value={fields.scoreTwo} id="scoreTwo" name="scoreTwo" placeholder="Score Two"
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, scoreTwo: e.target.value }
                        })
                    }
                } />

                <label htmlFor="wicketsTwo">Wickets Two</label>
                <input value={fields.wicketsTwo} id="wicketsTwo" name="wicketsTwo" placeholder="Wickets Two" 
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, wicketsTwo: e.target.value }
                        })
                    }
                }/>

                <label htmlFor="batsmanOne">batsman One</label>
                <input value={fields.batsmanOne} id="batsmanOne" name="batsmanOne" placeholder="batsman One" 
                
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, batsmanOne: e.target.value }
                        })
                    }
                }/>

                <label htmlFor="batsmanTwo">batsman Two</label>
                <input value={fields.batsmanTwo} id="batsmanTwo" name="batsmanTwo" placeholder="batsman Two" 
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, batsmanTwo: e.target.value }
                        })
                    }
                }
                />

                <label htmlFor="bowlerOne">bowler One</label>
                <input value={fields.bowlerOne} id="bowlerOne" name="bowlerOne" placeholder="bowler One"
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, bowlerOne: e.target.value }
                        })
                    }
                } />

                <label htmlFor="bowlerTwo">bowler Two</label>
                <input value={fields.bowlerTwo} id="bowlerTwo" name="bowlerTwo" placeholder="bowler Two" 
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, bowlerTwo: e.target.value }
                        })
                    }
                }/>

                <label htmlFor="toss">toss</label>
                <input value={fields.toss} id="toss" name="toss" placeholder="toss" 
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, toss: e.target.value }
                        })
                    }
                }/>

                <label htmlFor="oversOne">Overs One</label>
                <input value={fields.oversOne} id="oversOne" name="oversOne" placeholder="Overs One" 
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, oversOne: e.target.value }
                        })
                    }
                }/>

                <label htmlFor="overTwo">Overs Two</label>
                <input value={fields.overTwo} id="overTwo" name="overTwo" placeholder="Overs Two" 
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, overTwo: e.target.value }
                        })
                    }
                }/>

                <label htmlFor="headline">headline</label>
                <input value={fields.headline} id="headline" name="headline" placeholder="headline" 
                onChange={
                    (e)=>{
                        setFields((perv)=>{
                            return {...perv, headline: e.target.value }
                        })
                    }
                }/>
                <button onClick={submit} >Submit</button>
            
        </div >
    )
}
export default Admin;