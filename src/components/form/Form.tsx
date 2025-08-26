"use client";

import { useState } from "react";
import {
  Btn,
  BtnBorder,
  FormContainer,
  FormInput,
  FormSubContainer,
  TextArea,
} from "./styled";

export const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" }); // reset form
      } else {
        setStatus("❌ " + data.message || "Failed to send");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Network error, try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormSubContainer>
        <FormInput
          placeholder="Name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <FormInput
          placeholder="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </FormSubContainer>

      <FormInput
        $width="100%"
        type="text"
        placeholder="Subject"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        required
      />

      <TextArea
        rows={5}
        placeholder="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
        required
      />

      <BtnBorder>
        <Btn type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </Btn>
      </BtnBorder>

      {status && <p>{status}</p>}
    </FormContainer>
  );
};

export default Form;
