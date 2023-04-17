import { useState } from "react";

export default function RegisterForm() {
    const [form, setForm] = useState({
        firstName : "Azamat",
        lastName : "Salamatov", 
        email : "azamat@gmail.com"
    });

    const constForm = form;

    return (
        <>
            <label>
                First name: 
                <input 
                    value={form.firstName} 
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                    });
                }}
                />
            </label>
            <br/>
            <label>
                LastName:
                <input
                    value={form.lastName}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            lastName : e.target.value
                        });
                    }}
                />
            </label>
            <br/>
            <label>
                Email:
                <input
                    value={form.email}
                    onChange = {(e) => {
                        setForm({
                            ...form,
                            email : e.target.value
                        });
                    }}
                />
            </label>
            <h2>Your info is {form.firstName} {form.lastName} {form.email}</h2>
        </>
    );
}