import React from "react";
import "./Header.css";

export default function Header({ handleBeasts }) {
  return (
    <header className="headerCool">
      <h1>Beasts World</h1>

      <form className="hornfilter">
        <label className="horns-label" htmlFor="hornFilter">
          Choose by horns
        </label>
        <select id="numberOfHorns" name="numberOfHorns" onChange={handleBeasts}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2 </option>
          <option value="3">3</option>
          <option value="100">100</option>
        </select>
      </form>
    </header>
  );
}
