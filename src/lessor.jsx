import { Link } from 'react-router-dom';
import { AppExpo } from './App';
import { useNavigate } from 'react-router-dom';
import { Headers } from './App';
import { Footeras } from './App';
import { LogProvider } from './LogContext';

const lessor = () => {
    return (
        <LogProvider>
            <Header></Header>
                <section> 
                    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
                        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
                          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">Log in</h2>
                          
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                              <label htmlFor="email-input" className="block text-sm font-medium text-gray-600">
                                Username
                              </label>
                              <input
                                type="username"
                                id="email-input"
                                name="email"
                                className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Your username"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                    
                            <div>
                              <label htmlFor="email-password" className="block text-sm font-medium text-gray-600">
                                Password
                              </label>
                              <input
                                type="password"
                                id="email-password"
                                name="password"
                                className="mt-1 w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="**********"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                    
                            <button
                              type="submit"
                              className="w-full rounded bg-[#303ab2] px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            >
                              Continue
                            </button>
                          </form>
                    
                          <p className="mt-4 text-center text-sm text-gray-600">
                            Not registered yet?{' '}
                            <Link to="/register" className="text-blue-500 hover:underline">
                              Sign up
                            </Link>
                          </p>
                        </div>
                      </div>
                </section>

            <Footeras> </Footeras>
        </LogProvider>
    )

}