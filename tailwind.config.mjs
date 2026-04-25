/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			background: '#FFFFFF',
    			foreground: '#1F3A93',
    			card: {
    				DEFAULT: '#AACEEA',
    				foreground: '#1F3A93'
    			},
    			popover: {
    				DEFAULT: '#AACEEA',
    				foreground: '#1F3A93'
    			},
    			primary: {
    				DEFAULT: '#1F3A93',
    				foreground: '#FFFFFF'
    			},
    			secondary: {
    				DEFAULT: '#4B4E6D',
    				foreground: '#FFFFFF'
    			},
    			muted: {
    				DEFAULT: '#B0B7BC',
    				foreground: '#1F3A93'
    			},
    			accent: {
    				DEFAULT: '#AACEEA',
    				foreground: '#1F3A93'
    			},
    			destructive: {
    				DEFAULT: '#DC2626',
    				foreground: '#FFFFFF'
    			},
    			border: '#B0B7BC',
    			input: '#B0B7BC',
    			ring: '#1F3A93',
    			chart: {
    				'1': '#1F3A93',
    				'2': '#AACEEA',
    				'3': '#4B4E6D',
    				'4': '#B0B7BC',
    				'5': '#DC2626'
    			}
    		},
    		gridTemplateColumns: {
    			auto: 'repeat(auto-fit, minmax(200px, 1fr))'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
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
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
  };
  