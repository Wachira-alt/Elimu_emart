import { useState } from "react";

export default function Customization() {
  const [form, setForm] = useState({
    message: "",
    font: "Arial",
    color: "#000000",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customization Submitted:", form);
    alert("Customization saved (mocked)");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Customize Your Stationery</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Font</label>
          <select
            name="font"
            value={form.font}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="Arial">Arial</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Font Color</label>
          <input
            type="color"
            name="color"
            value={form.color}
            onChange={handleChange}
            className="w-16 h-10 p-0 border"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Save Customization
        </button>
      </form>

      <div className="mt-6 border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Preview</h3>
        <div
          className="p-4 border rounded"
          style={{
            fontFamily: form.font,
            color: form.color,
          }}
        >
          {form.message || "Your custom message will appear here..."}
        </div>
      </div>
    </div>
  );
}
