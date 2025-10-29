---
layout: post
title: File Upload Testing page
description: Test uploading here
type: issues
comments: True
permalink: /csa/file_test_upload
---




<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>File Upload Test</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
      }

      .upload-box {
        border: 2px dashed #888;
        border-radius: 12px;
        background: white;
        padding: 30px;
        width: 300px;
        text-align: center;
        cursor: pointer;
        transition: 0.3s;
      }

      .upload-box:hover {
        border-color: #007bff;
        background: #f0f8ff;
      }

      #preview {
        margin-top: 20px;
        text-align: center;
      }

      img {
        max-width: 100%;
        max-height: 200px;
        border-radius: 10px;
        margin-top: 10px;
      }

      #status {
        margin-top: 15px;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="upload-box" id="uploadBox">
      <p>Click or drop a file here to upload</p>
      <input type="file" id="fileInput" style="display: none" />
    </div>

    <div id="preview"></div>
    <div id="status"></div>

    <script>
      const uploadBox = document.getElementById("uploadBox");
      const fileInput = document.getElementById("fileInput");
      const preview = document.getElementById("preview");
      const status = document.getElementById("status");

      // Open file dialog when clicked
      uploadBox.addEventListener("click", () => fileInput.click());

      // When file selected
      fileInput.addEventListener("change", handleFile);

      // Drag and drop support
      uploadBox.addEventListener("dragover", (e) => {
        e.preventDefault();
        uploadBox.style.borderColor = "#007bff";
      });

      uploadBox.addEventListener("dragleave", () => {
        uploadBox.style.borderColor = "#888";
      });

      uploadBox.addEventListener("drop", (e) => {
        e.preventDefault();
        uploadBox.style.borderColor = "#888";
        handleFile({ target: { files: e.dataTransfer.files } });
      });

      // Handle file upload and preview
      async function handleFile(e) {
        const file = e.target.files[0];
        if (!file) return;

        preview.innerHTML = `<p><strong>File Name:</strong> ${file.name}</p>`;
        status.textContent = "Uploading...";

        // Show preview if image
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            const img = document.createElement("img");
            img.src = ev.target.result;
            preview.appendChild(img);
          };
          reader.readAsDataURL(file);
        } else {
          preview.innerHTML += `<p>File type: ${file.type || "Unknown"}</p>`;
        }

        // Upload file to backend
        const formData = new FormData();
        formData.append("file", file);

        try {
          const res = await fetch("/upload", {
            method: "POST",
            body: formData,
          });

          if (res.ok) {
            status.textContent = "✅ File uploaded successfully!";
          } else {
            status.textContent = "❌ Upload failed. Please try again.";
          }
        } catch (err) {
          status.textContent = "⚠️ Error: " + err.message;
        }
      }
    </script>
