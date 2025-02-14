## CORS:

# CORS ensures that your backend only allows requests from specific domains (origins). It is one of the security layers to prevent malicious websites from accessing sensitive backend resources, even if the user is authenticated. By specifying which domains are allowed, you control where data can be sent from, adding a layer of defense against cross-origin attacks.

# The frontend uses withCredentials: true to send cookies with requests, and the backend uses credentials: true to allow the frontend to send and receive those cookies (including setting them in the browser).
