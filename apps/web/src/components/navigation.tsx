import { Link } from "@tanstack/react-router";

export const Navigation = () => {
  return (
    <nav className="bg-white p-6 rounded-lg shadow-md w-64">
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Home
          </Link>
        </li>

        {/* Admin Routes */}
        <li className="mt-6">
          <strong className="block text-gray-900 font-bold text-sm uppercase tracking-wider pb-2 border-b border-gray-200">
            Admin
          </strong>
          <ul className="pl-3 pt-2 space-y-2">
            <li>
              <Link
                to="/users"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Users
              </Link>
              <ul className="pl-4 pt-1 space-y-1">
                <li>
                  <Link
                    to="/users/role-management"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Role Management
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/roles"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Roles
              </Link>
            </li>
            <li>
              <Link
                to="/recipients-whitelist"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Recipients Whitelist
              </Link>
            </li>
          </ul>
        </li>

        {/* Auth Routes */}
        <li className="mt-6">
          <strong className="block text-gray-900 font-bold text-sm uppercase tracking-wider pb-2 border-b border-gray-200">
            Authentication
          </strong>
          <ul className="pl-3 pt-2 space-y-2">
            <li>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Login
              </Link>
              <ul className="pl-4 pt-1 space-y-1">
                <li>
                  <Link
                    to="/login/sso"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    SSO
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Signup
              </Link>
            </li>
            <li>
              <Link
                to="/mfa"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                MFA
              </Link>
            </li>
            <li>
              <Link
                to="/forgot/password"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Forgot Password
              </Link>
            </li>
            <li>
              <Link
                to="/confirm-access"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Confirm Access
              </Link>
            </li>
            <li>
              <Link
                to="/oauth-authorize"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                OAuth Authorize
              </Link>
            </li>
            <li>
              <Link
                to="/register-phone"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Register Phone
              </Link>
            </li>
          </ul>
        </li>

        {/* Platform Routes */}
        <li className="mt-6">
          <strong className="block text-gray-900 font-bold text-sm uppercase tracking-wider pb-2 border-b border-gray-200">
            Platform
          </strong>
          <ul className="pl-3 pt-2 space-y-2">
            <li>
              <Link
                to="/email-templates"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Email Templates
              </Link>
              <ul className="pl-4 pt-1 space-y-1">
                <li>
                  <Link
                    to="/email-templates/create"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Create Template
                  </Link>
                  <ul className="pl-4 pt-1 space-y-1">
                    <li>
                      <Link
                        to="/email-templates/create/details"
                        className="text-gray-500 hover:text-blue-600 text-xs block py-1"
                      >
                        Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/email-templates/create/defaults"
                        className="text-gray-500 hover:text-blue-600 text-xs block py-1"
                      >
                        Defaults
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/email-templates/create/access-level"
                        className="text-gray-500 hover:text-blue-600 text-xs block py-1"
                      >
                        Access Level
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/email-templates/review"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Review
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/accounts"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Accounts
              </Link>
              <ul className="pl-4 pt-1 space-y-1">
                <li>
                  <Link
                    to="/accounts/create"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Create Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accounts/balance-alerts"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Balance Alerts
                  </Link>
                  <ul className="pl-4 pt-1 space-y-1">
                    <li>
                      <Link
                        to="/accounts/balance-alerts/create"
                        className="text-gray-500 hover:text-blue-600 text-xs block py-1"
                      >
                        Create Alert
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/orders"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Orders
              </Link>
              <ul className="pl-4 pt-1 space-y-1">
                <li>
                  <Link
                    to="/orders/order-history"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Order History
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders/line-items"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Line Items
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders/line-items-history"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Line Items History
                  </Link>
                </li>
              </ul>
            </li>

            <li className="group">
              <Link
                to="/order"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Order
              </Link>
              <ul className="pl-4 pt-1 space-y-1">
                <li>
                  <Link
                    to="/order/cart"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order/checkout"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order/email-templates-simple"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Email Templates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order/explore-all-tango-catalog"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Explore Catalog
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/print-templates"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Print Templates
              </Link>
              <ul className="pl-4 pt-1 space-y-1">
                <li>
                  <Link
                    to="/print-templates/create"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Create Template
                  </Link>
                  <ul className="pl-4 pt-1 space-y-1">
                    <li>
                      <Link
                        to="/print-templates/create/non-redeption"
                        className="text-gray-500 hover:text-blue-600 text-xs block py-1"
                      >
                        Non-Redemption
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/funding"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Funding
              </Link>
              <ul className="pl-4 pt-1 space-y-1">
                <li>
                  <Link
                    to="/funding/history"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    History
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/authentication"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Authentication
              </Link>
            </li>
            <li>
              <Link
                to="/groups"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Groups
              </Link>
            </li>
            <li>
              <Link
                to="/reports"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Reports
              </Link>
            </li>
            <li>
              <Link
                to="/reports-generated"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Generated Reports
              </Link>
            </li>
            <li>
              <Link
                to="/saml/manage"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                SAML Management
              </Link>
            </li>
          </ul>
        </li>

        {/* Settings Routes */}
        <li className="mt-6">
          <strong className="block text-gray-900 font-bold text-sm uppercase tracking-wider pb-2 border-b border-gray-200">
            Settings
          </strong>
          <ul className="pl-3 pt-2 space-y-2">
            <li>
              <Link
                to="/itegrations"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Integrations
              </Link>
            </li>
            <li>
              <Link
                to="/integrations/history"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Integration History
              </Link>
            </li>
            <li>
              <Link
                to="/settings/api-key-management"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                API Key Management
              </Link>
            </li>
            <li>
              <Link
                to="/settings/oauth-client-credentials-management"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                OAuth Credentials
              </Link>
            </li>
            <li>
              <Link
                to="/settings/order-settings-management"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Order Settings
              </Link>
            </li>
            <li>
              <Link
                to="/settings/qualtrics-api-key-management"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Qualtrics API Keys
              </Link>
            </li>
            <li>
              <Link
                to="/settings/user"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                User Settings
              </Link>
            </li>
          </ul>
        </li>

        {/* Integration Routes */}
        <li className="mt-6">
          <strong className="block text-gray-900 font-bold text-sm uppercase tracking-wider pb-2 border-b border-gray-200">
            Integrations
          </strong>
          <ul className="pl-3 pt-2 space-y-2">
            <li>
              <Link
                to="/qualtrics-research"
                className="text-gray-700 hover:text-blue-600 block py-1"
              >
                Qualtrics Research
              </Link>
              <ul className="pl-4 pt-1 space-y-1">
                <li>
                  <Link
                    to="/qualtrics-research/add"
                    className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                  >
                    Add
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
