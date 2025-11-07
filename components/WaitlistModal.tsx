'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setName('')
        setEmail('')
        setSuccess(false)
        setError('')
      }, 300)
    }
  }, [isOpen])

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist')
      }

      setSuccess(true)
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-[8px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[500px] glass-strong backdrop-blur-[40px] border-2 border-white/20 rounded-[32px] p-10 shadow-[0_30px_90px_rgba(255,255,255,0.2)] animate-scale-in overflow-hidden">
        {/* Celestial Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[32px] pointer-events-none">
          {/* Floating stars */}
          <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[15%] animate-pulse opacity-60" />
          <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[60%] left-[80%] animate-pulse opacity-40 [animation-delay:0.5s]" />
          <div className="absolute w-1 h-1 bg-white rounded-full top-[40%] left-[90%] animate-pulse opacity-50 [animation-delay:1s]" />
          <div className="absolute w-2 h-2 bg-white rounded-full top-[70%] left-[10%] animate-pulse opacity-30 [animation-delay:1.5s]" />

          {/* Gradient orb */}
          <div className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-20 bg-gradient-to-br from-white/30 to-white/10 -top-[150px] -right-[150px] animate-orb-float" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full glass border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 z-10"
          aria-label="Close modal"
        >
          <span className="text-white text-xl">×</span>
        </button>

        {/* Logo */}
        <div className="relative flex justify-center mb-6">
          <div className="w-[70px] h-[70px] flex items-center justify-center">
            <Image
              src="/Logo.png"
              alt="Celestial Studio Logo"
              width={70}
              height={70}
              className="drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {success ? (
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full glass border-2 border-white/30 flex items-center justify-center">
                <span className="text-4xl">✓</span>
              </div>
              <h2 className="text-[2rem] font-black gradient-text mb-4">
                Welcome Aboard!
              </h2>
              <p className="text-gray-300 text-[1.1rem]">
                You&apos;re on the waitlist. We&apos;ll notify you soon.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-[2.2rem] font-black gradient-text text-center mb-3 tracking-[-0.5px]">
                Join the Waitlist
              </h2>
              <p className="text-gray-400 text-center mb-8 text-[1.05rem]">
                Be among the first to train robots with AI
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-[16px] glass border border-white/10 bg-white/[0.03] text-white placeholder-gray-500 focus:border-white/30 focus:bg-white/[0.05] focus:outline-none transition-all duration-300 text-[1rem]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-5 py-4 rounded-[16px] glass border border-white/10 bg-white/[0.03] text-white placeholder-gray-500 focus:border-white/30 focus:bg-white/[0.05] focus:outline-none transition-all duration-300 text-[1rem]"
                    placeholder="your@email.com"
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-[12px] bg-red-500/10 border border-red-500/30 text-red-300 text-sm text-center animate-fade-in">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black px-8 py-4 rounded-full text-[1.1rem] font-extrabold transition-all duration-[400ms] hover:scale-[1.02] hover:-translate-y-1 uppercase tracking-wide shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {loading ? 'Joining...' : 'Join Waitlist'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
                </button>
              </form>

              <p className="text-gray-500 text-[0.85rem] text-center mt-6">
                We respect your privacy. No spam, ever.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
