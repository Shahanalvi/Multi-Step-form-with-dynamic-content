<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <style>
        body {
            background-color: #f8f9fa;
            font-family: Arial, sans-serif;
        }

        .container {
            text-align: center;
            padding: 100px;
        }

        .title {
            font-size: 36px;
            margin-bottom: 20px;
        }

        .description {
            font-size: 18px;
            margin-bottom: 30px;
            color: #6c757d;
        }

        .start-button {
            padding: 10px 30px;
            font-size: 18px;
            border: none;
            background-color: #007bff;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
        }

        .start-button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="title">
            Welcome to Our Service
        </div>
        <div class="description">
            Discover amazing features and benefits. Get started now!
        </div>
        <a href="#form-step-1" class="start-button">Start</a>
    </div>

    <div id="form-step-1" class="container">
        <!-- Form step 1 content goes here -->
    </div>

    <!-- Include Bootstrap JS at the end of the body for better performance -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
