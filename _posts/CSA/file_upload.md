---
layout: post
title: File Upload Testing page
description: Test uploading here
type: issues
comments: True
permalink: /csa/file-test-upload
---


  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>File Upload Test</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
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
  </style>
<body>
  <div class="upload-box" id="uploadBox">
    <p>Click or drop a file here to upload</p>
    <input type="file" id="fileInput" style="display: none" />
  </div>

  <div id="preview"></div>

  <script>
    const uploadBox = document.getElementById('uploadBox');
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');

    // When clicked, open file dialog
    uploadBox.addEventListener('click', () => fileInput.click());

    // When file selected
    fileInput.addEventListener('change', handleFile);

    // Drag and drop support
    uploadBox.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadBox.style.borderColor = '#007bff';
    });

    uploadBox.addEventListener('dragleave', () => {
      uploadBox.style.borderColor = '#888';
    });

    uploadBox.addEventListener('drop', (e) => {
      e.preventDefault();
      uploadBox.style.borderColor = '#888';
      handleFile({ target: { files: e.dataTransfer.files } });
    });

    // Handle file preview
    function handleFile(e) {
      const file = e.target.files[0];
      if (!file) return;

      preview.innerHTML = `<p><strong>File Name:</strong> ${file.name}</p>`;

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const img = document.createElement('img');
          img.src = ev.target.result;
          preview.appendChild(img);
        };
        reader.readAsDataURL(file);
      } else {
        preview.innerHTML += `<p>File type: ${file.type || 'Unknown'}</p>`;
      }
    }
  </script>