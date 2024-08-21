import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const URLShortener: React.FC = () => {
  const [longUrl, setLongUrl] = useState<string>("");
  const [customSlug, setCustomSlug] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://api.scissor.example/shorten", {
        longUrl: longUrl,
        customSlug: customSlug, // Pass the custom slug to the backend
      });

      setShortUrl(response.data.shortUrl);

    const qrResponse = await axios.get("https://api.qrserver.com/v1/create-qr-code/", {
        params: {
          data: response.data.shortUrl,
          size: "150x150",
        },
        responseType: "blob", // To handle the binary data of the image
      });

      const qrBlob = new Blob([qrResponse.data], { type: "image/png" });
      const qrCodeUrl = URL.createObjectURL(qrBlob);
      setQrCodeUrl(qrCodeUrl);
    } catch (error) {
      console.error("Error shortening the URL or generating the QR code!", error);
    }
  };

  return (
    <div className="url-shortener">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
        />
        <input 
        type="text"
        placeholder="Enter your desired custom name"
        value={customSlug}
        onChange={(e) => setCustomSlug(e.target.value)}
        />

        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
          {qrCodeUrl && (
            <div>
              <p>QR Code:</p>
              <img src={qrCodeUrl} alt="QR Code" />
              <a href={qrCodeUrl} download="qrcode.png">Download QR Code</a>
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default URLShortener;
