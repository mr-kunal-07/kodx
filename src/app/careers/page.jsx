"use client";
import React, { useState, useCallback } from "react";
import { Loader2, Send } from "lucide-react";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

// Constants
const ALLOWED_FILE_TYPES = {
    'application/pdf': '.pdf',
    'application/msword': '.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx'
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const INITIAL_FORM_STATE = {
    name: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
    coverLetter: ""
};

const INITIAL_STATUS_STATE = {
    loading: false,
    success: null,
    error: null
};

const CareersPage = () => {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [status, setStatus] = useState(INITIAL_STATUS_STATE);
    const [resume, setResume] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    // Validate file
    const validateFile = useCallback((file) => {
        if (!file) {
            return { valid: false, error: "Please select a file" };
        }

        if (!Object.keys(ALLOWED_FILE_TYPES).includes(file.type)) {
            return { valid: false, error: "Only PDF, DOC, or DOCX files are allowed" };
        }

        if (file.size > MAX_FILE_SIZE) {
            return { valid: false, error: `File size must be less than ${MAX_FILE_SIZE / (1024 * 1024)}MB` };
        }

        return { valid: true, error: null };
    }, []);

    // Handle input changes
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (status.error) {
            setStatus(prev => ({ ...prev, error: null }));
        }
    }, [status.error]);

    // Handle file selection
    const handleFileChange = useCallback((e) => {
        const file = e.target.files?.[0];

        if (!file) {
            setResume(null);
            return;
        }

        const validation = validateFile(file);

        if (!validation.valid) {
            setStatus(prev => ({ ...prev, error: validation.error }));
            setResume(null);
            e.target.value = ''; // Reset file input
            return;
        }

        setResume(file);
        setStatus(prev => ({ ...prev, error: null }));
    }, [validateFile]);

    // Reset form
    const resetForm = useCallback(() => {
        setFormData(INITIAL_FORM_STATE);
        setResume(null);
        setUploadProgress(0);

        // Reset file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
    }, []);

    // Submit form via XMLHttpRequest with progress tracking
    const submitForm = useCallback((formDataToSend) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open("POST", "/api/career-apply");

            // Track upload progress
            xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                    const percent = Math.round((event.loaded / event.total) * 100);
                    setUploadProgress(percent);
                }
            });

            // Handle successful response
            xhr.addEventListener('load', () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    try {
                        const data = JSON.parse(xhr.responseText);
                        resolve(data);
                    } catch {
                        resolve({ success: true });
                    }
                } else {
                    try {
                        const data = JSON.parse(xhr.responseText);
                        reject(new Error(data.error || `Server error: ${xhr.status}`));
                    } catch {
                        reject(new Error(`Failed to send application (Status: ${xhr.status})`));
                    }
                }
            });

            // Handle network errors
            xhr.addEventListener('error', () => {
                reject(new Error("Network error. Please check your connection and try again"));
            });

            // Handle request timeout
            xhr.addEventListener('timeout', () => {
                reject(new Error("Request timed out. Please try again"));
            });

            xhr.timeout = 60000; // 60 second timeout
            xhr.send(formDataToSend);
        });
    }, []);

    // Handle form submission
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        // Validate resume is selected
        if (!resume) {
            setStatus({ loading: false, success: null, error: "Please upload your resume" });
            return;
        }

        // Re-validate file before submission
        const validation = validateFile(resume);
        if (!validation.valid) {
            setStatus({ loading: false, success: null, error: validation.error });
            return;
        }

        // Set loading state
        setStatus({ loading: true, success: null, error: null });
        setUploadProgress(0);

        try {
            // Prepare form data
            const form = new FormData();

            // Add form fields
            Object.entries(formData).forEach(([key, value]) => {
                if (value) form.append(key, value);
            });

            // Add additional fields
            form.append("requirement", `Job Application: ${formData.position}`);
            form.append("message", `LinkedIn: ${formData.linkedin || 'Not provided'}\n\nCover Letter: ${formData.coverLetter}`);
            form.append("budget", "N/A");
            form.append("resume", resume);

            // Submit form
            await submitForm(form);

            // Success state
            setStatus({
                loading: false,
                success: "Application submitted successfully! We'll review your application and get back to you soon.",
                error: null
            });

            // Reset form after brief delay
            setTimeout(resetForm, 2000);

        } catch (err) {
            setStatus({
                loading: false,
                success: null,
                error: err.message || "Failed to send application. Please try again"
            });
            setUploadProgress(0);
        }
    }, [formData, resume, validateFile, submitForm, resetForm]);

    // Styling classes
    const inputClasses =
        "w-full p-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:bg-white/15";

    const statusMessageClasses = "flex items-center justify-center mt-4 px-4 py-3 rounded-lg font-medium";

    const actionButtonClasses =
        "w-full flex items-center justify-center gap-3 text-white font-semibold px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/20 ring-1 ring-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] transition-all duration-300 overflow-hidden hover:scale-[1.02] active:scale-100 focus-visible:outline-none bg-purple-500/20 hover:bg-purple-500/30 hover:border-purple-300/40 hover:shadow-lg hover:shadow-purple-400/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

    return (
        <section className="flex items-center justify-center p-4 sm:p-8 min-h-screen">
            <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-8 sm:p-12 w-full max-w-3xl shadow-2xl shadow-purple-500/10">
                <div className="text-center space-y-4 mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                        <Send className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                        Join KodX Media 🚀
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        We're always looking for talented people! Fill out the form below to apply for a position at KodX Media.
                    </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-white/80 text-sm font-medium">
                                Full Name *
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status.loading}
                                className={inputClasses}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-white/80 text-sm font-medium">
                                Email Address *
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status.loading}
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-white/80 text-sm font-medium">
                                Phone Number *
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                placeholder="+1 (555) 123-4567"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                disabled={status.loading}
                                className={inputClasses}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="position" className="text-white/80 text-sm font-medium">
                                Position Applied For *
                            </label>
                            <input
                                id="position"
                                type="text"
                                name="position"
                                placeholder="e.g. Frontend Developer"
                                value={formData.position}
                                onChange={handleChange}
                                required
                                disabled={status.loading}
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="linkedin" className="text-white/80 text-sm font-medium">
                            LinkedIn Profile
                        </label>
                        <input
                            id="linkedin"
                            type="url"
                            name="linkedin"
                            placeholder="https://linkedin.com/in/yourprofile"
                            value={formData.linkedin}
                            onChange={handleChange}
                            disabled={status.loading}
                            className={inputClasses}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="coverLetter" className="text-white/80 text-sm font-medium">
                            Cover Letter *
                        </label>
                        <textarea
                            id="coverLetter"
                            name="coverLetter"
                            placeholder="Tell us why you want to join KodX Media, your experience, and what excites you about this role..."
                            value={formData.coverLetter}
                            onChange={handleChange}
                            required
                            rows={5}
                            disabled={status.loading}
                            className={`${inputClasses} resize-none`}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="resume" className="text-white/80 text-sm font-medium">
                            Resume/CV (PDF, DOC, DOCX - Max 10MB) *
                        </label>
                        <input
                            id="resume"
                            type="file"
                            name="resume"
                            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={handleFileChange}
                            required
                            disabled={status.loading}
                            className={`${inputClasses} file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-500/20 file:text-white hover:file:bg-purple-500/30 file:cursor-pointer`}
                        />
                        {resume && (
                            <p className="text-white/70 text-sm flex items-center gap-2">
                                <CheckCircleIcon className="h-4 w-4 text-green-400" />
                                Selected: {resume.name} ({(resume.size / 1024).toFixed(2)} KB)
                            </p>
                        )}
                    </div>

                    {status.loading && (
                        <div className="w-full flex flex-col items-center gap-3 mt-4">
                            <span className="text-2xl font-bold text-white drop-shadow-sm">
                                {uploadProgress}%
                            </span>
                            <div className="w-full bg-white/10 rounded-full h-6 overflow-hidden border border-purple-400/30 shadow-lg">
                                <div
                                    className="h-6 transition-all duration-300"
                                    style={{
                                        width: `${uploadProgress}%`,
                                        background: `linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #22c55e ${uploadProgress}%)`,
                                        boxShadow: '0 0 10px 2px rgba(168,85,247,0.3)'
                                    }}
                                />
                            </div>
                            <span className="text-white/70 text-sm">Uploading your application...</span>
                        </div>
                    )}

                    {status.success && !status.loading && (
                        <div className={`${statusMessageClasses} bg-green-500/10 border border-green-400/20 text-green-300`}>
                            <CheckCircleIcon className="h-6 w-6 mr-3 text-green-200 flex-shrink-0" />
                            <span>{status.success}</span>
                        </div>
                    )}

                    {status.error && !status.loading && (
                        <div className={`${statusMessageClasses} bg-red-500/10 border border-red-400/20 text-red-300`}>
                            <XCircleIcon className="h-6 w-6 mr-3 text-red-200 flex-shrink-0" />
                            <span>{status.error}</span>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status.loading}
                        className={actionButtonClasses}
                    >
                        {status.loading ? (
                            <>
                                <Loader2 className="animate-spin h-5 w-5" />
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <Send className="h-5 w-5" />
                                <span>Send Application</span>
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CareersPage;