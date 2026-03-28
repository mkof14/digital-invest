import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  showDetails: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, showDetails: false };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      `[ErrorBoundary] ${new Date().toISOString()}`,
      error,
      errorInfo.componentStack
    );
  }

  handleReload = () => {
    window.location.reload();
  };

  toggleDetails = () => {
    this.setState((prev) => ({ showDetails: !prev.showDetails }));
  };

  render() {
    if (this.state.hasError) {
      // Inline styles as safety net in case Tailwind fails
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            fontFamily: "system-ui, sans-serif",
            background: "#f9fafb",
            color: "#111827",
          }}
        >
          <div
            style={{
              maxWidth: "28rem",
              width: "100%",
              background: "#fff",
              borderRadius: "0.75rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                margin: "0 auto 1rem",
                borderRadius: "50%",
                background: "#fee2e2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
              }}
            >
              ⚠️
            </div>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 600, margin: "0 0 0.5rem" }}>
              Something went wrong
            </h1>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", margin: "0 0 1.5rem" }}>
              An unexpected error occurred. Please try reloading the page.
            </p>
            <button
              onClick={this.handleReload}
              style={{
                padding: "0.625rem 1.5rem",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Reload Page
            </button>
            <div style={{ marginTop: "1rem" }}>
              <button
                onClick={this.toggleDetails}
                style={{
                  background: "none",
                  border: "none",
                  color: "#6b7280",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                {this.state.showDetails ? "Hide details" : "Show details"}
              </button>
              {this.state.showDetails && this.state.error && (
                <pre
                  style={{
                    marginTop: "0.75rem",
                    padding: "0.75rem",
                    background: "#f3f4f6",
                    borderRadius: "0.375rem",
                    fontSize: "0.7rem",
                    textAlign: "left",
                    overflow: "auto",
                    maxHeight: "12rem",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {this.state.error.message}
                  {"\n\n"}
                  {this.state.error.stack}
                </pre>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
