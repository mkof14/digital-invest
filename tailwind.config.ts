import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			backgroundSize: {
				'300%': '300% 300%'
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					vibrant: 'hsl(var(--primary-vibrant))',
					dark: 'hsl(var(--primary-dark))',
					light: 'hsl(var(--primary-light))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))',
					vibrant: 'hsl(var(--secondary-vibrant))',
					dark: 'hsl(var(--secondary-dark))',
					light: 'hsl(var(--secondary-light))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))',
					vibrant: 'hsl(var(--accent-vibrant))',
					dark: 'hsl(var(--accent-dark))',
					light: 'hsl(var(--accent-light))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
					glow: 'hsl(var(--success-glow))',
					dark: 'hsl(var(--success-dark))',
					light: 'hsl(var(--success-light))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))',
					glow: 'hsl(var(--warning-glow))',
					dark: 'hsl(var(--warning-dark))',
					light: 'hsl(var(--warning-light))'
				},
				error: {
					DEFAULT: 'hsl(var(--error))',
					foreground: 'hsl(var(--error-foreground))',
					glow: 'hsl(var(--error-glow))',
					dark: 'hsl(var(--error-dark))',
					light: 'hsl(var(--error-light))'
				},
				info: {
					DEFAULT: 'hsl(var(--info))',
					foreground: 'hsl(var(--info-foreground))',
					glow: 'hsl(var(--info-glow))',
					dark: 'hsl(var(--info-dark))',
					light: 'hsl(var(--info-light))'
				},
				tech: {
					DEFAULT: 'hsl(var(--tech))',
					foreground: 'hsl(var(--tech-foreground))',
					glow: 'hsl(var(--tech-glow))',
					dark: 'hsl(var(--tech-dark))'
				},
				innovation: {
					DEFAULT: 'hsl(var(--innovation))',
					foreground: 'hsl(var(--innovation-foreground))',
					glow: 'hsl(var(--innovation-glow))',
					dark: 'hsl(var(--innovation-dark))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					hover: 'hsl(var(--card-hover))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-tech': 'var(--gradient-tech)',
				'gradient-invest': 'var(--gradient-invest)',
				'gradient-neural': 'var(--gradient-neural)',
				'gradient-bio': 'var(--gradient-bio)',
				'gradient-corporate': 'var(--gradient-corporate)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-electric': 'var(--gradient-electric)',
				'gradient-rainbow': 'var(--gradient-rainbow)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-premium': 'var(--gradient-premium)',
				'gradient-innovation': 'var(--gradient-innovation)',
				'gradient-sophisticated': 'var(--gradient-sophisticated)',
				'gradient-blue': 'linear-gradient(135deg, hsl(210, 100%, 50%), hsl(200, 100%, 60%), hsl(220, 100%, 70%))',
				'gradient-orange': 'linear-gradient(135deg, hsl(25, 95%, 55%), hsl(35, 100%, 60%), hsl(45, 95%, 65%))',
				'gradient-purple': 'linear-gradient(135deg, hsl(260, 70%, 40%), hsl(270, 75%, 50%), hsl(280, 70%, 55%))'
			},
			boxShadow: {
				'tech': 'var(--shadow-tech)',
				'invest': 'var(--shadow-invest)',
				'glow': 'var(--shadow-glow)',
				'elevated': 'var(--shadow-elevated)',
				'vibrant': 'var(--shadow-vibrant)',
				'rainbow': 'var(--shadow-rainbow)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'fast': 'var(--transition-fast)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'blur-fade-in': {
					'0%': {
						opacity: '0',
						filter: 'blur(10px)',
						transform: 'scale(1.05)'
					},
					'100%': {
						opacity: '1',
						filter: 'blur(0)',
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shimmer': 'shimmer 2s infinite linear',
				'fade-in': 'fade-in 0.5s ease-out',
				'blur-fade-in': 'blur-fade-in 0.7s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;