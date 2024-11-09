import React from "react";

function App() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "27761cce-4b31-4430-a573-9b2df6340b13");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-yellow-300"
            type="text"
            name="name"
            id="name"
            required
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-yellow-300"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Your Email"
          />
        </div>

        {/* Message */}
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-yellow-300"
            name="message"
            id="message"
            required
            placeholder="Your Message"
            rows="5"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold px-6 py-2 rounded-xl"
          >
            Submit Form
          </button>
        </div>
      </form>
      {/* Submission Result */}
      {result && (
        <div className="mt-6 text-center text-green-600 font-medium">
          {result}
        </div>
      )}
    </div>
  );
}

export default App;
