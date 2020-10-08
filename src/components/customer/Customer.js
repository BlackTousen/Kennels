import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer,location }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address className="location__address">{location}</address>
    </section>
)