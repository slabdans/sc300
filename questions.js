const questions = [
  // Question Type 1: Single Choice (Radio)
  {
    id: 1,
    type: "single",
    question: `
      <p>You have an Azure Active Directory (Azure AD) tenant that contains the following objects:</p>
      <ul>
        <li>A device named <strong>Device1</strong></li>
        <li>Users named <strong>User1, User2, User3, User4,</strong> and <strong>User5</strong></li>
        <li>Groups named <strong>Group1, Group2, Group3, Group4,</strong> and <strong>Group5</strong></li>
      </ul>
      <p>The groups are configured as shown in the following table:</p>

      <table class="hotspot-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Membership type</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Group1</strong></td>
            <td>Security</td>
            <td>Assigned</td>
            <td>User1, User3, Group2, Group3</td>
          </tr>
          <tr>
            <td><strong>Group2</strong></td>
            <td>Security</td>
            <td>Dynamic User</td>
            <td>User2</td>
          </tr>
          <tr>
            <td><strong>Group3</strong></td>
            <td>Security</td>
            <td>Dynamic Device</td>
            <td>Device1</td>
          </tr>
          <tr>
            <td><strong>Group4</strong></td>
            <td>Microsoft 365</td>
            <td>Assigned</td>
            <td>User4</td>
          </tr>
          <tr>
            <td><strong>Group5</strong></td>
            <td>Microsoft 365</td>
            <td>Dynamic User</td>
            <td>User5</td>
          </tr>
        </tbody>
      </table>

      <p>To which groups can you assign a Microsoft Office 365 Enterprise E5 license directly?</p>
    `,
    options: [
      "Group1 and Group4 only",
      "Group1, Group2, Group3, Group4, and Group5",
      "Group1 and Group2 only",
      "Group1 only",
      "Group1, Group2, Group4, and Group5 only"
    ],
    answer: 1, // Index 1 correlates to Option B
    explanation: `
      <p><strong>Correct Answer: B (Group1, Group2, Group3, Group4, and Group5)</strong></p>
      <p>You can assign licences to any group created within the Azure AD portal. These can include security groups, Microsoft 365 groups, and either assigned or dynamic groups. You can even create a dynamic device security group and assign E5 licences to it, which doesn't make sense but is true (I've tested it).</p><br>
      <p>However, the missing bit of information is whether the Microsoft 365 groups have the "SecurityEnabled" attribute set to True. Only M365 groups that have the "SecurityEnabled" attribute set to True can have licences assigned to them. If the group is created in the M365 Admin Centre, then the "SecurityEnabled" attribute is set to False and you can not assign licences to the group. But if the M365 group is created in the Azure AD portal, then the "SecurityEnabled" attribute is set to True and you can assign licences.</p><br>
	<p>For the answer, I would make an assumption that because this is an Identity-related exam testing us on Azure AD topics, that the M365 groups were created in the Azure AD portal and therefore have the "SecurityEnabled" attribute set to True. Which means the correct answer is B - all groups.</p>
    `
  },



 // Question 2: Single Choice
 {
    id: 2,
    type: "single",
    question: `
      <p>You have a Microsoft Exchange organization that uses an SMTP address space of contoso.com.</p>
      <p>Several users use their contoso.com email address for self-service sign-up to Azure Active Directory (Azure AD). You gain global administrator privileges to the Azure AD tenant that contains the self-signed users.</p>
      <p>You need to prevent the users from creating user accounts in the contoso.com Azure AD tenant for self-service sign-up to Microsoft 365 services.</p><br>
      <p>Which PowerShell cmdlet should you run?</p>
    `,
    options: [
      "Set-MsolCompanySettings",
      "Set-MsolDomainFederationSettings",
      "Update-MsolFederatedDomain",
      "Set-MsolDomain"
    ],
    answer: 0, // Index 0 correlates to Option A
    explanation: `
      <p><strong>Correct Answer: A (Set-MsolCompanySettings)</strong></p>
      <p>Self-service sign-up is a method by which a user signs up for a cloud service and has an identity automatically created for them in Azure AD based on their email domain.</p><br>
      <p>Azure AD cmdlet Set-MsolCompanySettings could help you to prevent creating user accounts with parameters:</p><br>
<p>AllowEmailVerifiedUsers (users can join the tenant by email validation)-->when is TRUE. </p><br><p>AllowAdHocSubscriptions (controls the ability for users to perform self-service sign-up)</p><p>e.g. Set-MsolCompanySettings -AllowEmailVerifiedUsers $false -AllowAdHocSubscriptions $false Reference:</p><br><p>https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/directory-self-service-signup</p></br>
      <ul>
        <li><code>AllowEmailVerifiedUsers</code>: Controls whether users can join the tenant via email validation. Set to <code>$false</code> to block.</li>
        <li><code>AllowAdHocSubscriptions</code>: Controls the ability for users to perform self-service sign-ups. Set to <code>$false</code> to block.</li>
      </ul>
      <p>Example: <code>Set-MsolCompanySettings -AllowEmailVerifiedUsers $false -AllowAdHocSubscriptions $false</code></p>
    `
  }, 

{
    id: 3,
    type: "single",
    question: `
      <p>You have a Microsoft 365 tenant that uses the domain named fabrikam.com. The Guest invite settings for Azure Active Directory (Azure AD) are configured as shown in the exhibit. (Click the Exhibit tab.)</p>
      <div style="margin: 15px 0; text-align: center;">
        <img src="guest_user.png" alt="Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
        <p style="margin-top: 10px;">A user named <strong>bsmith@fabrikam.com</strong> shares a Microsoft SharePoint Online document library to the users shown in the following table.</p>
      </div>
      <p>Which users will receive a one-time passcode (OTP)?</p>
    `,
    options: [
      "User2 only",
      "User1 and User2 only",
      "User1, User2, and User3",
      "User3 only"
    ],
    answer: 0, // Index 0 correlates to Option A
    explanation: `
      <p><strong>Correct Answer: A (User2 only)</strong></p>
      <p><em>Reference User Email: bsmith@fabrikam.com</em></p>
      <p>According to Microsoft documentation on email one-time passcode (OTP) authentication:</p>
      <blockquote>
        "When the email one-time passcode feature is enabled, newly invited users who meet certain conditions will use one-time passcode authentication. Guest users who redeemed an invitation before email one-time passcode was enabled will continue to use their same authentication method."
      </blockquote>
      <ul>
        <li><strong>User 1:</strong> Already a registered guest user in fabrikam.com, so they will not receive an additional OTP.</li>
        <li><strong>User 2:</strong> Has never accessed fabrikam.com, so they <strong>WILL</strong> receive an OTP each time they sign in.</li>
        <li><strong>User 3:</strong> Is a internal domain user, so they will not receive a guest OTP.</li>
      </ul>
    `
  },

  // Question 4: Single Choice
  {
    id: 4,
    type: "single",
    question: `
      <p>You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.</p>
      <p>From the Groups blade in the Azure Active Directory admin center, you assign Microsoft 365 Enterprise E5 licenses to the users.</p>
      <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>
      <p>What should you use?</p>
    `,
    options: [
      "The Identity Governance blade in the Azure Active Directory admin center",
      "The Set-AzureAdUser cmdlet",
      "The Licenses blade in the Azure Active Directory admin center",
      "The Set-WindowsProductKey cmdlet"
    ],
    answer: 2, // Index 2 correlates to Option C
    explanation: `
      <p>You can unassign licenses from users on either the Active users page, or on the Licenses page. The method you use depends on whether you want to unassign product licenses from specific users or unassign users licenses from a specific product.</p><br>
      <p><strong>Note:</strong> There are several versions of this question in the exam. The question has two possible correct answers:</p><br>
      <ol>
        <li>the Licenses blade in the Azure Active Directory admin center</li>
        <li>the Set-MsolUserLicense cmdlet</li>
      </ol>
      <p>Other incorrect answer options you may see on the exam include the following:</p>
      <ul>
        <li>the Administrative units blade in the Azure Active Directory admin center</li>
        <li>the Groups blade in the Azure Active Directory admin center</li>
      </ul>
    `
  },

{
    id: 5,
    type: "matrix",
    question: `
      <p><strong>Question 5: Hot Spot</strong></p>
      <p>You have a Microsoft 365 tenant named <code>contoso.com</code>. Guest user access is enabled.</p>
      <p>Users are invited to collaborate with contoso.com as shown in the following table:</p>
      
      <!-- Styled User Table -->
      <table style="width:100%; border-collapse: collapse; margin: 15px 0; border: 1px solid #000; font-size: 14px;">
        <thead>
          <tr style="background-color: #fff2cc; border-bottom: 1px solid #000;">
            <th style="padding: 6px; border-right: 1px solid #000; text-align: center;">User email</th>
            <th style="padding: 6px; border-right: 1px solid #000; text-align: center;">User type</th>
            <th style="padding: 6px; border-right: 1px solid #000; text-align: center;">Invitation accepted</th>
            <th style="padding: 6px; text-align: center;">Shared resource</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 6px; border-right: 1px solid #000;">User1@outlook.com</td>
            <td style="padding: 6px; border-right: 1px solid #000;">Guest</td>
            <td style="padding: 6px; border-right: 1px solid #000;">No</td>
            <td style="padding: 6px;">Enterprise application</td>
          </tr>
          <tr>
            <td style="padding: 6px; border-right: 1px solid #000;">User2@fabrikam.com</td>
            <td style="padding: 6px; border-right: 1px solid #000;">Guest</td>
            <td style="padding: 6px; border-right: 1px solid #000;">Yes</td>
            <td style="padding: 6px;">Enterprise application</td>
          </tr>
        </tbody>
      </table>

      <p>From the External collaboration settings in the Azure Active Directory admin center, you configure the Collaboration restrictions settings as shown in the following exhibit:</p>
      
      <!-- Styled Azure UI Exhibit Container -->
      <div style="border: 1px solid #ccc; padding: 15px; border-radius: 4px; background: #fff; margin: 15px 0; font-family: Segoe UI, sans-serif; font-size: 14px;">
        <h4 style="margin-top: 0; margin-bottom: 12px; color: #333;">Collaboration restrictions</h4>
        <div style="margin-bottom: 8px;">
          <input type="radio" disabled> <label style="color: #555;">Allow invitations to be sent to any domain (most inclusive)</label>
        </div>
        <div style="margin-bottom: 8px;">
          <input type="radio" disabled> <label style="color: #555;">Deny invitations to the specified domains</label>
        </div>
        <div style="margin-bottom: 15px;">
          <input type="radio" checked disabled> <label style="font-weight: 600; color: #000;">Allow invitations only to the specified domains (most restrictive)</label>
        </div>
        <div style="margin-left: 20px; border-top: 1px solid #eee; padding-top: 10px;">
          <div style="font-size: 12px; font-weight: bold; color: #555; margin-bottom: 8px;">TARGET DOMAINS</div>
          <div style="margin-left: 10px; color: #333;">Outlook.com</div>
        </div>
      </div>

      <p>From a Microsoft SharePoint Online site, a user invites <code>User3@fabrikam.com</code> to the site.</p>
      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
    `,
    rows: [
      { id: "stmt1", label: "User1 can accept the invitation and gain access to the enterprise application." },
      { id: "stmt2", label: "User2 can access the enterprise application." },
      { id: "stmt3", label: "User3 can accept the invitation and gain access to the SharePoint site." }
    ],
    answer: {
      stmt1: 0,
      stmt2: 0,
      stmt3: 1
    },
    explanation: `
      <strong>User1 (Yes):</strong> Outlook.com is explicitly included in the allowed target domains list, so User1 can redeem the invitation.<br>
      <strong>User2 (Yes):</strong> User2 accepted the invitation before restrictions were applied. Collaboration restrictions only affect new redemptions, so existing guest access remains intact.<br>
      <strong>User3 (No):</strong> Fabrikam.com is not included in the allowed target domains list, meaning new invitations or redemptions for this domain are blocked.
    `
  },

{
    id: 6,
    type: "multiple",
    question: `
      <p><strong>Question 6</strong></p>
      <p>You have an Azure Active Directory (Azure AD) tenant named contoso.com.</p>
      <p>You plan to bulk invite Azure AD business-to-business (B2B) collaboration users.</p>
      <p>Which two parameters must you include when you create the bulk invite? Each correct answer presents part of the solution.</p>
      <p><em>NOTE: Each correct selection is worth one point.</em></p>
    `,
    options: [
      "email address",
      "redirection URL",
      "username",
      "shared key",
      "password"
    ],
    answer: [0, 1], // 0 = email address (A), 1 = redirection URL (B)
    explanation: `
	<p>Answer: A & B </p><br>
      <p>https://docs.microsoft.com/en-us/azure/active-directory/external-identities/tutorial-bulk-invite#invite-guest-users-in-bulk</p>
      <p><strong>Required values are:</strong></p>
      <p><strong>Email address to invite</strong> - the user who will receive an invitation</p>
      <p><strong>Redirection url</strong> - the URL to which the invited user is forwarded after accepting the invitation. If you want to forward the user to the My Apps page, you must change this value to https://myapps.microsoft.com or https://myapplications.microsoft.com.</p>
      <p><strong>Why the other options are incorrect:</strong></p>
      <p><strong>C. username:</strong> You do not define an internal username for B2B guest users. They sign in using their existing external corporate email or identity provider credentials.</p>
      <p><strong>D. shared key:</strong> Azure B2B does not utilize shared cryptographic keys during the bulk invitation creation or redemption phases.</p>
      <p><strong>E. password:</strong> Because guest users authenticate against their own home tenant or identity provider (like Google, a personal Microsoft account, or another Entra tenant), you do not create or manage a password for them.</p>
      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/external-identities/tutorial-bulk-invite</p>
    `
  },

{
    id: 7,
    type: "single",
    question: `
      <p><strong>Question 7</strong></p>
      <p>You have an Azure Active Directory (Azure AD) tenant that contains the objects shown in the following table:</p>
      
      <!-- Styled Tenant Objects Table -->
      <table style="width:100%; border-collapse: collapse; margin: 15px 0; border: 1px solid #000; font-size: 14px;">
        <thead>
          <tr style="background-color: #fff2cc; border-bottom: 1px solid #000;">
            <th style="padding: 6px; border-right: 1px solid #000; text-align: left;">Name</th>
            <th style="padding: 6px; border-right: 1px solid #000; text-align: left;">Type</th>
            <th style="padding: 6px; text-align: left;">Directly assigned license</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 6px; border-right: 1px solid #000;">User1</td>
            <td style="padding: 6px; border-right: 1px solid #000;">User</td>
            <td style="padding: 6px; font-style: italic;">None</td>
          </tr>
          <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 6px; border-right: 1px solid #000;">User2</td>
            <td style="padding: 6px; border-right: 1px solid #000;">User</td>
            <td style="padding: 6px;">Microsoft Office 365 Enterprise E5</td>
          </tr>
          <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 6px; border-right: 1px solid #000;">Group1</td>
            <td style="padding: 6px; border-right: 1px solid #000;">Security group</td>
            <td style="padding: 6px;">Microsoft Office 365 Enterprise E5</td>
          </tr>
          <tr style="border-bottom: 1px solid #000;">
            <td style="padding: 6px; border-right: 1px solid #000;">Group2</td>
            <td style="padding: 6px; border-right: 1px solid #000;">Microsoft 365 group</td>
            <td style="padding: 6px; font-style: italic;">None</td>
          </tr>
          <tr>
            <td style="padding: 6px; border-right: 1px solid #000;">Group3</td>
            <td style="padding: 6px; border-right: 1px solid #000;">Mail-enabled security group</td>
            <td style="padding: 6px; font-style: italic;">None</td>
          </tr>
        </tbody>
      </table>

      <p>Which objects can you add as members to Group3?</p>
    `,
    options: [
      "User2 and Group2 only",
      "User2, Group1, and Group2 only",
      "User1, User2, Group1 and Group2",
      "User1 and User2 only",
      "User2 only"
    ],
    answer: 4, // 4 = E (User2 only)
    explanation: `
	<p>Answer: E</p><br>
      <p>The answer is User2 only. I just tested. You can't assign the users with no license. 100%</p>
      <p><strong>Tested in Lab environment:</strong></p>
      <p>Mail enabled Security Group can only be managed in the M365 Admin Center.</p>
      <p>In AAD, you can't modify the membership. - "Some groups can't be managed in the Azure Portal."<br>
      In the M365 admin center, only users can be added to the mail-enabled security group.<br>
      You can only add licensed users to the group, unlicensed users won't even show up on the member select page.</p>
      <p><strong>Why the other options are incorrect:</strong></p>
      <p><strong>User1:</strong> User1 does not hold a proper active license seat configuration in this context, meaning the system filters them out from the membership selection page entirely.</p>
      <p><strong>Group1 &amp; Group2:</strong> Mail-enabled security groups managed through these administration scopes do not support standard sub-group nesting or associative object groupings, making any group inclusion invalid.</p>
    `
  },
{
    id: 8,
    type: "dragdrop",
    question: `
      <p><strong>Question 8: Drag and Drop</strong></p>
      <p>You have an on-premises Microsoft Exchange organization that uses an SMTP address space of contoso.com. You discover that users use their email address for self-service sign-up to Microsoft 365 services.</p>
      <p>You need to gain global administrator privileges to the Azure Active Directory (Azure AD) tenant that contains the self-signed users.</p>
      <p>Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>
    `,
    items: [
      { id: "act1", text: "Sign in to the Microsoft 365 admin center." },
      { id: "act2", text: "Create a self-signed user account in the Azure AD tenant." },
      { id: "act3", text: "From the Microsoft 365 admin center, add the domain name." },
      { id: "act4", text: "Respond to the Become the admin message." },
      { id: "act5", text: "From the Microsoft 365 admin center, remove the domain name." },
      { id: "act6", text: "Create a TXT record in the contoso.com DNS zone." }
    ],
    targets: [
      { id: "step1", label: "Step 1" },
      { id: "step2", label: "Step 2" },
      { id: "step3", label: "Step 3" },
      { id: "step4", label: "Step 4" }
    ],
    answer: {
      step1: "act2", // Create a self-signed user account in the Azure AD tenant.
      step2: "act1", // Sign in to the Microsoft 365 admin center.
      step3: "act4", // Respond to the Become the admin message.
      step4: "act6"  // Create a TXT record in the contoso.com DNS zone.
    },
    explanation: `
      <p><strong>Step 1: Create a self-signed user account in the Azure AD tenant</strong><br>
      <strong>Why it's first:</strong> To take over the tenant from within, you must first establish a foothold inside that specific unmanaged directory space. You do this by performing a self-service sign-up (creating an account like admin-takeover@contoso.com) via a free service page. This adds your new identity directly into the unmanaged tenant’s database.</p>
      
      <p><strong>Step 2: Sign into the Microsoft 365 admin center</strong><br>
      <strong>Why it's second:</strong> Once your unmanaged user object exists, you log in to the portal using those specific credentials. Because the tenant currently lacks a designated global administrator, the system recognizes your session context and presents an opportunity to claim the realm.</p>
      
      <p><strong>Step 3: Respond to the Become the admin message</strong><br>
      <strong>Why it's third:</strong> Upon logging into the unmanaged portal, Microsoft 365 displays a prompt offering you the option to "Become the admin" of the domain. Initiating this wizard begins the programmatic ownership challenge verification workflow.</p>
      
      <p><strong>Step 4: Create a TXT record in the contoso.com DNS zone</strong><br>
      <strong>Why it's fourth:</strong> Microsoft enforces a strict cryptographic proof-of-ownership challenge to ensure bad actors cannot hijack an organization's directory. To complete the takeover, the platform generates a unique MS=msXXXXXXXX token string. You must log in to your external public domain registrar (like GoDaddy, Cloudflare, or Azure DNS) and publish this string as a TXT record in the public contoso.com DNS zone file.</p>
      
      <p>Once Microsoft's edge servers query DNS and successfully verify that the record matches, your account is immediately elevated to the Global Administrator role, and the unmanaged tenant is officially transformed into a fully managed corporate infrastructure.</p>
      
      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/domains-admin-takeover</p>
    `
  },
{
    id: 9,
    type: "dropdown",
    question: `
      <p><strong>Question 9: Hotspot</strong></p>
      <p>You have an Azure Active Directory (Azure AD) tenant that contains a user named User1 and the groups shown in the following table.</p>
      
      <table style="width: 100%; max-width: 500px; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #ccc;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Name</th>
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Type</th>
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Membership type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">Group1</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Security</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Assigned</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">Group2</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Security</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Dynamic User</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">Group3</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Security</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Dynamic Device</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">Group4</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Microsoft 365</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Assigned</td>
          </tr>
        </tbody>
      </table>

      <p>In the tenant, you create the groups shown in the following table.</p>

      <table style="width: 100%; max-width: 500px; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #ccc;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Name</th>
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Type</th>
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Membership type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">GroupA</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Security</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Assigned</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">GroupB</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Microsoft 365</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Assigned</td>
          </tr>
        </tbody>
      </table>

      <p>Which members can you add to GroupA and GroupB? To answer, select the appropriate options in the answer area.</p>
      <p><em>NOTE: Each correct selection is worth one point.</em></p>

      <div style="margin-top: 15px; background: #f9f9f9; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
        <p style="margin-bottom: 8px;"><strong>GroupA:</strong> 
          <select class="inline-select" data-key="groupA" style="padding: 6px; margin-left: 10px;">
            <option value="">-- Select Option --</option>
            <option value="User1 only">User1 only</option>
            <option value="User1 and Group1 only">User1 and Group1 only</option>
            <option value="User1, Group1, and Group2 only">User1, Group1, and Group2 only</option>
            <option value="User1, Group1, and Group4 only">User1, Group1, and Group4 only</option>
            <option value="User1, Group1, Group2, and Group3 only">User1, Group1, Group2, and Group3 only</option>
            <option value="User1, Group1, Group2, Group3, and Group4">User1, Group1, Group2, Group3, and Group4</option>
          </select>
        </p>
        <p style="margin-bottom: 0;"><strong>GroupB:</strong> 
          <select class="inline-select" data-key="groupB" style="padding: 6px; margin-left: 10px;">
            <option value="">-- Select Option --</option>
            <option value="User1 only">User1 only</option>
            <option value="User1 and Group4 only">User1 and Group4 only</option>
            <option value="User1, Group1, and Group4 only">User1, Group1, and Group4 only</option>
            <option value="User1, Group1, Group2, and Group4 only">User1, Group1, Group2, and Group4 only</option>
            <option value="User1, Group1, Group2, Group3, and Group4">User1, Group1, Group2, Group3, and Group4</option>
          </select>
        </p>
      </div>
    `,
    answer: {
      groupA: "User1, Group1, Group2, and Group3 only",
      groupB: "User1 only"
    },
    explanation: `
      <p><strong>Correct Selections:</strong></p>
      <ul>
        <li><strong>Group A:</strong> User1, Group1, Group2, and Group3. (Group A cannot contain M365 groups).</li>
        <li><strong>Group B:</strong> User1 only. (M365 groups cannot contain other groups).</li>
      </ul>

      <p><strong>Incorrect Options Breakdown:</strong></p>
      
      <p><strong>User1 only</strong><br>
      <em>Why it's incorrect for Group A:</em> This option is overly restrictive. While individual users can certainly be added as direct members, security groups are fully capable of containing other compatible security groups (Group1, Group2, Group3) through nesting capabilities.</p>

      <p><strong>User1 and Group1 only / User1, Group1, and Group2 only</strong><br>
      <em>Why they are incorrect:</em> These options leave out valid security groups. Group1, Group2, and Group3 are all valid security groups that can be combined as nested sub-members. Omitting any of them fails to capture the full set of allowable members.</p>

      <p><strong>User1, Group1, and Group4 only / User1, Group1, Group2, Group3, and Group4</strong><br>
      <em>Why they are incorrect:</em> Both of these options include Group4. Group4 is a Microsoft 365 group, which is structurally barred from being nested inside a standard Azure/Entra security group. Including it would result in a configuration error.</p>
    `
  },
{
    id: 10,
    type: "single",
    question: `
      <div style="border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;">
        <strong>Scenario (Questions 10-13):</strong><br>
        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>
        <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>
        You have an Active Directory forest that syncs to an Azure Active Directory (Azure AD) tenant.<br>
        You discover that when a user account is disabled in Active Directory, the disabled user can still authenticate to Azure AD for up to 30 minutes.
      </div>
      <p><strong>Question 10</strong></p>
      <p>You need to ensure that when a user account is disabled in Active Directory, the user account is immediately prevented from authenticating to Azure AD.</p>
      <p><strong>Solution:</strong> You configure password writeback. Does this meet the goal?</p>
    `,
    options: ["Yes", "No"],
    answer: 1, // B = No
    explanation: `
      <p>Password writeback is a feature of Azure AD Connect which ensures that when a password changes in Azure AD (password change, self-service password reset, or an administrative change to a user password) it is written back to the local AD – if they meet the on-premises AD password policy.</p>
      <p>Technically, a password write-back operation is a password “reset” action. Password writeback removes the need to set up an on-premises solution for users to reset their password. It all happens in real time, and so users are notified immediately if their password could not be reset or changed for any reason.</p>
      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/hybrid/choose-ad-authn</p>
    `
  },
  {
    id: 11,
    type: "single",
    question: `
      <div style="border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;">
        <strong>Scenario (Questions 10-13):</strong><br>
        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>
        <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>
        You have an Active Directory forest that syncs to an Azure Active Directory (Azure AD) tenant.<br>
        You discover that when a user account is disabled in Active Directory, the disabled user can still authenticate to Azure AD for up to 30 minutes.
      </div>
      <p><strong>Question 11</strong></p>
      <p>You need to ensure that when a user account is disabled in Active Directory, the user account is immediately prevented from authenticating to Azure AD.</p>
      <p><strong>Solution:</strong> You configure pass-through authentication. Does this meet the goal?</p>
    `,
    options: ["Yes", "No"],
    answer: 0, // A = Yes
    explanation: `
      <p>Azure Active Directory (Azure AD) Pass-through Authentication allows your users to sign in to both on-premises and cloud-based applications by using the same passwords. Pass-through Authentication signs users in by validating their passwords directly against on-premises Active Directory.</p>
      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/hybrid/choose-ad-authn</p>
    `
  },
  {
    id: 12,
    type: "single",
    question: `
      <div style="border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;">
        <strong>Scenario (Questions 10-13):</strong><br>
        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>
        <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>
        You have an Active Directory forest that syncs to an Azure Active Directory (Azure AD) tenant.<br>
        You discover that when a user account is disabled in Active Directory, the disabled user can still authenticate to Azure AD for up to 30 minutes.
      </div>
      <p><strong>Question 12</strong></p>
      <p>You need to ensure that when a user account is disabled in Active Directory, the user account is immediately prevented from authenticating to Azure AD.</p>
      <p><strong>Solution:</strong> You configure conditional access policies. Does this meet the goal?</p>
    `,
    options: ["Yes", "No"],
    answer: 1, // B = No
    explanation: `
      <p>Azure Active Directory (Azure AD) Pass-through Authentication allows your users to sign into both on-premises and cloud-based applications using the same passwords. It uses a lightweight on-premises agent that listens for and responds to password validation requests. If disabled user can not login.</p>
      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/hybrid/choose-ad-authn</p>
    `
  },

{
    id: 13,
    type: "single",
    question: `
      <div style="border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;">
        <strong>Scenario (Questions 10-13):</strong><br>
        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>
        <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>
        You have an Active Directory forest that syncs to an Azure Active Directory (Azure AD) tenant.<br>
        You discover that when a user account is disabled in Active Directory, the disabled user can still authenticate to Azure AD for up to 30 minutes.
      </div>
      <p><strong>Question 12</strong></p>
      <p>You need to ensure that when a user account is disabled in Active Directory, the user account is immediately prevented from authenticating to Azure AD.</p>
      <p><strong>Solution:</strong> You configure Azure AD Password Protection. Does this meet the goal?</p>
    `,
    options: ["Yes", "No"],
    answer: 1, // B = No
    explanation: `
      <p>Correct solution shall be Azure Active Directory (Azure AD) Pass-through Authentication.<br>

Azure Active Directory (Azure AD) Pass-through Authentication allows your users to sign in to both on- premises and cloud-based applications by using the same passwords. Pass-through Authentication signs users in by validating their passwords directly against on-premises Active Directory.</p>
     
    `
  },

{
    id: 14,
    type: "single",
    question: `
      <p><strong>Question 13: Multiple Choice</strong></p>
      <p>You have an Azure Active Directory (Azure AD) tenant that contains the following objects:</p>
      <ul>
        <li>A device named Device1</li>
        <li>Users named User1, User2, User3, User4, and User5</li>
        <li>Five groups named Group1, Group2, Group3, Group4, and Group5</li>
      </ul>
      <p>The groups are configured as shown in the following table:</p>

      <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #ccc;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Name</th>
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Type</th>
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Membership type</th>
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Members</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">Group1</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Security</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Assigned</td>
            <td style="border: 1px solid #ccc; padding: 6px;">User1, User3, Group2, Group4</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">Group2</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Security</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Dynamic User</td>
            <td style="border: 1px solid #ccc; padding: 6px;">User2</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">Group3</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Security</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Dynamic Device</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Device1</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">Group4</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Microsoft 365</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Assigned</td>
            <td style="border: 1px solid #ccc; padding: 6px;">User4</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">Group5</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Microsoft 365</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Assigned</td>
            <td style="border: 1px solid #ccc; padding: 6px;">User5</td>
          </tr>
        </tbody>
      </table>

      <p>How many licenses are used if you assign the Microsoft 365 Enterprise E5 license to Group1?</p>
    `,
    options: [
      "0",
      "2",
      "3",
      "4"
    ],
    answer: 1, // B = 2 (0-indexed position)
    explanation: `
      <p><strong>Answer: B (2)</strong></p>
      <p>Because nested group do not inherit licenses.</p>
      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/licensing-group-advanced</p>
    `
  },
{
    id: 15,
    type: "single",
    question: `
      <p><strong>Question 14: Multiple Choice</strong></p>
      <p>You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains an Azure AD enterprise application named App1.</p>
      <p>A contractor uses the credentials of contractor@adatum.com.</p>
      <p>You need to ensure that you can provide the contractor with access to App1. The contractor must be able to authenticate as contractor@adatum.com.</p>
      <p>What should you do?</p>
    `,
    options: [
      "Run the New-AzADUser cmdlet.",
      "Configure the External collaboration settings.",
      "Add a WS-Fed identity provider.",
      "Create a guest user account in contoso.com."
    ],
    answer: 3, // D = Create a guest user account in contoso.com. (0-indexed position)
    explanation: `
      <p><strong>Answer: D (Create a guest user account in contoso.com.)</strong></p>
      <p><strong>Explanation:</strong><br>
      Creating a Guest User Account is Correct</p>
      <p><strong>B2B Collaboration Object:</strong> When you invite or create a guest user account for an external email address like contractor@adatum.com inside contoso.com, Entra ID provisions a user object with a UserType of Guest.</p>
      <p><strong>Federated Authentication:</strong> The contractor does not get assigned a password inside your tenant. Instead, when they attempt to access App1, your tenant recognizes them as an external guest and safely redirects their authentication request back to their native identity provider (in this case, their external provider at adatum.com).</p>
      <p><strong>Access Mapping:</strong> Once authenticated, they are granted access to App1 as configured.</p>
    `
  },
{
    id: 16,
    type: "single",
    question: `
      <p><strong>Question 15: Multiple Choice</strong></p>
      <p>Your network contains an Active Directory forest named contoso.com that is linked to an Azure Active Directory (Azure AD) tenant named contoso.com by using Azure AD Connect.</p>
      <p>You need to prevent the synchronization of users who have the extensionAttribute15 attribute set to NoSync. What should you do in Azure AD Connect?</p>
    `,
    options: [
      "Create an inbound synchronization rule for the Windows Azure Active Directory connector.",
      "Configure a Full Import run profile.",
      "Create an inbound synchronization rule for the Active Directory Domain Services connector.",
      "Configure an Export run profile."
    ],
    answer: 2, // C = Create an inbound synchronization rule for the Active Directory Domain Services connector. (0-indexed position)
    explanation: `
      <p><strong>Answer: C (Create an inbound synchronization rule for the Active Directory Domain Services connector.)</strong></p>
      <p><strong>Explanation:</strong><br>
      The connector name is Active Directory Domain Services connector (AD DS connector).</p>
      <p><strong>Reference:</strong><br>
      Azure AD Connect: Configure AD DS Connector Account Permissions<br>
      https://learn.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-configure-ad-ds-connector-account<br>
      https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-sync-change-the-configuration</p>
    `
  },
{
    id: 17,
    type: "single",
    question: `
      <p><strong>Question 16: Multiple Choice</strong></p>
      <p>Your network contains an on-premises Active Directory domain that syncs to an Azure Active Directory (Azure AD) tenant. The tenant contains the users shown in the following table.</p>

      <table style="width: 100%; max-width: 500px; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #ccc;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Name</th>
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Type</th>
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Directory synced</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">User1</td>
            <td style="border: 1px solid #ccc; padding: 6px;">User</td>
            <td style="border: 1px solid #ccc; padding: 6px;">No</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">User2</td>
            <td style="border: 1px solid #ccc; padding: 6px;">User</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Yes</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">User3</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Guest</td>
            <td style="border: 1px solid #ccc; padding: 6px;">No</td>
          </tr>
        </tbody>
      </table>

      <p>All the users work remotely. Azure AD Connect is configured in Azure AD as shown in the following exhibit.</p>

      <div style="border: 1px solid #ccc; padding: 12px; max-width: 500px; background-color: #fff; margin-bottom: 15px; font-family: Arial, sans-serif; font-size: 13px;">
        <p style="font-weight: bold; margin: 0 0 8px 0; font-size: 14px;">PROVISION FROM ACTIVE DIRECTORY</p>
        <p style="margin: 0 0 4px 0; color: #0066cc; font-weight: bold;">Azure AD Connect cloud provisioning</p>
        <p style="margin: 0 0 10px 0;">This feature allows you to manage provisioning from the cloud.</p>
        <p style="margin: 0 0 10px 0; color: #0066cc;">Manage provisioning (Preview)</p>
        
        <p style="font-weight: bold; margin: 0 0 6px 0;">Azure AD Connect sync</p>
        <table style="width: 100%; margin-bottom: 12px; border: none;">
          <tr>
            <td style="width: 45%; padding: 2px 0;">Sync Status</td>
            <td style="font-weight: bold; padding: 2px 0;">Enabled</td>
          </tr>
          <tr>
            <td style="padding: 2px 0;">Last Sync</td>
            <td style="font-weight: bold; padding: 2px 0;">Less than 1 hour ago</td>
          </tr>
          <tr>
            <td style="padding: 2px 0;">Password Hash Sync</td>
            <td style="font-weight: bold; padding: 2px 0;">Enabled</td>
          </tr>
        </table>

        <p style="font-weight: bold; margin: 10px 0 6px 0; font-size: 14px;">USER SIGN IN</p>
        <table style="width: 100%; border: none;">
          <tr>
            <td style="width: 45%; color: #0066cc; padding: 2px 0;">Federation</td>
            <td style="font-weight: bold; padding: 2px 0;">Disabled</td>
            <td style="padding: 2px 0;">0 domains</td>
          </tr>
          <tr>
            <td style="color: #0066cc; padding: 2px 0;">Seamless single sign-on</td>
            <td style="font-weight: bold; padding: 2px 0;">Disabled</td>
            <td style="padding: 2px 0;">0 domains</td>
          </tr>
          <tr>
            <td style="color: #0066cc; padding: 2px 0;">Pass-through authentication</td>
            <td style="font-weight: bold; padding: 2px 0;">Enabled</td>
            <td style="padding: 2px 0;">2 agents</td>
          </tr>
        </table>
      </div>

      <p>Connectivity from the on-premises domain to the internet is lost. Which users can sign in to Azure AD?</p>
    `,
    options: [
      "User1 and User3 only",
      "User1 only",
      "User1, User2, and User3",
      "User1 and User2 only"
    ],
    answer: 0, // A = User1 and User3 only (0-indexed position)
    explanation: `
      <p><strong>Answer: A (User1 and User3 only)</strong></p>
      <p><strong>Explanation:</strong><br>
      When the connection to on-premise is lost, PTA will not work anymore. The failover to Password Hash Synchronization is not automatic and needs to be configured manually in AD Connect. If the connection to on-premise is lost, and the AD Connect server runs on-premise, user 2 cannot login.</p>
      <p>Enabling Password Hash Synchronization gives you the option to failover authentication if your on-premises infrastructure is disrupted. This failover from Pass-through Authentication to Password Hash Synchronization is not automatic. You'll need to switch the sign-in method manually using Azure AD Connect. If the server running Azure AD Connect goes down, you'll require help from Microsoft Support to turn off Pass-through Authentication.</p>
      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-pta-current-limitations</p>
    `
  },
{
    id: 18,
    type: "hotspot",
    question: `
      <p><strong>Question 18: Hotspot</strong></p>
      <p>Your network contains an on-premises Active Directory domain named contoso.com. The domain contains the objects shown in the following table.</p>

      <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-bottom: 15px; border: 1px solid #ccc;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Name</th>
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Type</th>
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">In organizational unit (OU)</th>
            <th style="border: 1px solid #ccc; padding: 6px; text-align: left;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">User1</td>
            <td style="border: 1px solid #ccc; padding: 6px;">User</td>
            <td style="border: 1px solid #ccc; padding: 6px;">OU1</td>
            <td style="border: 1px solid #ccc; padding: 6px;">User1 is a member of Group1.</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">User2</td>
            <td style="border: 1px solid #ccc; padding: 6px;">User</td>
            <td style="border: 1px solid #ccc; padding: 6px;">OU1</td>
            <td style="border: 1px solid #ccc; padding: 6px;">User2 is not a member of any groups.</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">Group1</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Security group</td>
            <td style="border: 1px solid #ccc; padding: 6px;">OU2</td>
            <td style="border: 1px solid #ccc; padding: 6px;">User1 and Group2 are members of Group1.</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 6px;">Group2</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Security group</td>
            <td style="border: 1px solid #ccc; padding: 6px;">OU1</td>
            <td style="border: 1px solid #ccc; padding: 6px;">Group2 is a member of Group1.</td>
          </tr>
        </tbody>
      </table>

      <p>You install Azure AD Connect. You configure the Domain and OU filtering settings as shown in the Domain and OU Filtering exhibit.</p>
      
      <!-- FIRST IMAGE HERE -->
      <div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q18-domain-filtering.jpg" alt="Domain and OU Filtering" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>

      <p>You configure the Filter users and devices settings as shown in the Filter Users and Devices exhibit.</p>
      
      <!-- SECOND IMAGE HERE -->
      <div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q18-user-filtering.jpg" alt="Filter Users and Devices" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>

      <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
      <p><em>NOTE: Each correct selection is worth one point.</em></p>

      <!-- UPDATED TABLE SECTION WITH WORKAROUND -->
      <div style="margin-top: 15px; background: #fff; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid #ccc;">
              <th style="text-align: left; padding: 8px;">Statements</th>
              <th style="text-align: center; padding: 8px; width: 80px;">Yes</th>
              <th style="text-align: center; padding: 8px; width: 80px;">No</th>
            </tr>
          </thead>
          <tbody>
            <!-- Hidden dummy input satisfies app.js standard radio check -->
            <input type="radio" name="answer" id="hotspot_dummy" style="display:none;" checked>

            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px;">User1 syncs to Azure AD.</td>
              <td style="text-align: center;"><input type="radio" name="q18_statement1" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q18_statement1 = 'Yes';"></td>
              <td style="text-align: center;"><input type="radio" name="q18_statement1" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q18_statement1 = 'No';"></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 8px;">User2 syncs to Azure AD.</td>
              <td style="text-align: center;"><input type="radio" name="q18_statement2" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q18_statement2 = 'Yes';"></td>
              <td style="text-align: center;"><input type="radio" name="q18_statement2" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q18_statement2 = 'No';"></td>
            </tr>
            <tr>
              <td style="padding: 8px;">Group2 syncs to Azure AD.</td>
              <td style="text-align: center;"><input type="radio" name="q18_statement3" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q18_statement3 = 'Yes';"></td>
              <td style="text-align: center;"><input type="radio" name="q18_statement3" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q18_statement3 = 'No';"></td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    answer: {
      q18_statement1: "Yes",
      q18_statement2: "No",
      q18_statement3: "Yes"
    },
    explanation: `
      <p><strong>Statement 1: User1 syncs to Azure AD — Yes</strong><br>
      <em>Why it's true:</em> In a custom Azure AD Connect pilot setup configured with group-based filtering, direct members of the targeted filtering group (Group1) are explicitly captured by the sync engine rule and provisioned successfully into the cloud directory.</p>

      <p><strong>Statement 2: User2 syncs to Azure AD — No</strong><br>
      <em>Why it's false:</em> Azure AD Connect group-based filtering strictly ignores nested group members. Because User2 belongs to Group2 (which is nested inside Group1), the synchronization engine does not evaluate or process any objects inside that sub-container tier.</p>

      <p><strong>Statement 3: Group2 syncs to Azure AD — Yes</strong><br>
      <em>Why it's true:</em> While the individual members inside a nested group are completely skipped, the group object itself (Group2) is a direct item element inside the parent group (Group1). Therefore, the group container object syncs over to Azure AD as an empty security group wrapper.</p>

      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-install-custom</p>
    `
  },
{
    id: 19,
    type: "single",
    question: `
      <p><strong>Question 19: Multiple Choice</strong></p>
      <p>You have an Azure Active Directory (Azure AD) tenant named contoso.com.</p>
      <p>You need to ensure that Azure AD External Identities pricing is based on monthly active users (MAU). What should you configure?</p>
    `,
    options: [
      "A user flow",
      "The terms of use",
      "A linked subscription",
      "An access review"
    ],
    answer: 2, // 0-based index corresponding to option C ("A linked subscription")
    explanation: `
      <p><strong>Correct Answer: C — A linked subscription</strong></p>
      <p>To take advantage of MAU billing, your Azure AD tenant must be linked to an Azure subscription.</p>

      <p><strong>Why the other options are incorrect:</strong></p>
      <ul>
        <li><strong>Option A (a user flow):</strong> A user flow defines the automated identity journey (such as sign-up, sign-in, or profile editing pages) that external users encounter, but it does not control platform financial or billing settings.</li>
        <li><strong>Option B (the terms of use):</strong> This is a conditional access component used to force guests or external partners to read and accept legal or corporate policies before accessing company applications.</li>
        <li><strong>Option D (an access review):</strong> This identity governance tool allows administrators or managers to audit and periodically recertify guest accounts to verify whether they still require system privileges.</li>
      </ul>

      <p><strong>Reference:</strong> <a href="https://docs.microsoft.com/en-us/azure/active-directory/external-identities/external-identities-pricing" target="_blank">https://docs.microsoft.com/en-us/azure/active-directory/external-identities/external-identities-pricing</a></p>
    `
  },
{
    id: 20,
    type: "dragdrop",
    question: `
      <p><strong>Question 20: Drag and Drop</strong></p>
      <p>You have a new Microsoft 365 tenant that uses a domain name of contoso.onmicrosoft.com. You register the name contoso.com with a domain registrar.</p>
      <p>You need to use contoso.com as the default domain name for new Microsoft 365 users.</p>
      <p>Which four actions should you perform in sequence? To answer, drag the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>
    `,
    items: [
      { id: "item_1", text: "Delete the contoso.onmicrosoft.com domain." },
      { id: "item_2", text: "Add a custom domain name of contoso.com." },
      { id: "item_3", text: "Set the domain to primary." },
      { id: "item_4", text: "Create a new TXT record in DNS." },
      { id: "item_5", text: "Successfully verify the domain name." }
    ],
    targets: [
      { id: "step_1", label: "Step 1:" },
      { id: "step_2", label: "Step 2:" },
      { id: "step_3", label: "Step 3:" },
      { id: "step_4", label: "Step 4:" }
    ],
    answer: {
      step_1: "item_2", // Add a custom domain name of contoso.com.
      step_2: "item_4", // Create a new TXT record in DNS.
      step_3: "item_5", // Successfully verify the domain name.
      step_4: "item_3"  // Set the domain to primary.
    },
    explanation: `
      <p><strong>Correct Sequence:</strong></p>
      <ol>
        <li><strong>Add a custom domain name of contoso.com:</strong> You start by telling Microsoft which domain you own.</li>
        <li><strong>Create a new TXT record in DNS:</strong> Microsoft provides a unique value that you must add to your domain registrar's DNS settings. This proves you actually own the domain.</li>
        <li><strong>Successfully verify the domain name:</strong> Once the TXT record is live, you click "Verify" in the admin center. Microsoft checks the DNS, and if the record matches, the domain is added to your tenant.</li>
        <li><strong>Set the domain to primary:</strong> This is the final step if you want new users to automatically receive email addresses ending in @contoso.com instead of the default .onmicrosoft.com.</li>
      </ol>

      <p><strong>Incorrect Action:</strong></p>
      <ul>
        <li><strong>Delete the contoso.onmicrosoft.com domain:</strong> The default <code>.onmicrosoft.com</code> domain is permanent and cannot be deleted from a tenant.</li>
      </ul>

      <p><strong>Reference:</strong> <a href="https://practical365.com/configure-a-custom-domain-in-office-365/" target="_blank">https://practical365.com/configure-a-custom-domain-in-office-365/</a></p>
    `
  },
{
  id: 21,
  type: "matrix",
  question: `
    <p>You have an Azure Active Directory (Azure AD) tenant that has an Azure Active Directory Premium Plan 2 license. The tenant contains the users shown in the following table:</p>
    <div style="margin-bottom: 15px;">
      <img src="images/table_q21.jpg" alt="Users Table" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>You have the Device Settings shown in the following exhibit:</p><br>
    <div style="margin-bottom: 15px;">
      <img src="images/exhibit_q21.jpg" alt="Device Settings Exhibit" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>User1 has the devices shown in the following table:</p>
    <div style="margin-bottom: 15px;">
      <img src="images/devices_q21_table.jpg" alt="Devices Table" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
  `,
  rows: [
    {
      id: "statement_1",
      label: "User1 can join four additional Windows 10 devices to Azure AD."
    },
    {
      id: "statement_2",
      label: "Admin1 can set Devices to be Azure AD joined or Azure AD registered require Multi-Factor Authentication to Yes."
    },
    {
      id: "statement_3",
      label: "Admin2 is a local administrator on Device3."
    }
  ],
  answer: {
    statement_1: 1, // 0 = Yes, 1 = No
    statement_2: 0, // 0 = Yes, 1 = No
    statement_3: 1  // 0 = Yes, 1 = No
  },
  explanation: `
    <p><strong>Box 1: No</strong><br>
    The "Maximum number of devices per user" setting is set to 5. This limit applies to the total count of both Azure AD joined AND Azure AD registered devices combined. User1 already has 4 devices registered/joined (Device1 through Device4), so User1 can only add 1 more device before reaching the maximum limit of 5, not four.</p>

    <p><strong>Box 2: Yes</strong><br>
    To view or manage device settings in the Azure portal, a user must be assigned one of the following roles: Global Administrator, Cloud Device Administrator, Global Reader, or Directory Reader. Since Admin1 is assigned the <strong>Cloud device administrator</strong> role, they have the required permissions to modify device settings.</p>

    <p><strong>Box 3: No</strong><br>
    Device3 has a device identity of <strong>Azure AD registered</strong>. The Azure AD local administrator role and additional local administrators only apply to <strong>Azure AD joined</strong> devices, not Azure AD registered (BYOD) devices.</p>
  `
},
{
  id: 22,
  type: "dragdrop",
  question: `
    <p>You have a Microsoft 365 E5 subscription that contains three users named User1, User2, and User3. You need to configure the users as shown in the following table:</p>
    <div style="margin-bottom: 15px;">
      <img src="images/q22_configuration.jpg" alt="Users Configuration Table" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>Which portal should you use to configure each user? To answer, drag the appropriate portals to the correct users. Each portal may be used once, more than once, or not at all.</p>
    <p style="font-size: 13px; color: #555;">NOTE: Each correct selection is worth one point.</p>
  `,
  items: [
    { id: "item_azure_ad", text: "Azure Active Directory admin center" },
    { id: "item_exchange", text: "Exchange admin center" },
    { id: "item_compliance", text: "Microsoft 365 compliance center" },
    { id: "item_endpoint", text: "Microsoft Endpoint Manager admin center" },
    { id: "item_sharepoint", text: "SharePoint admin center" }
  ],
  targets: [
    { id: "target_user1", label: "User1:" },
    { id: "target_user2", label: "User2:" },
    { id: "target_user3", label: "User3:" }
  ],
  answer: {
    target_user1: "item_azure_ad", // Azure Active Directory admin center
    target_user2: "item_exchange", // Exchange admin center
    target_user3: "item_endpoint"  // Microsoft Endpoint Manager admin center
  },
  explanation: `
    <p>Azure Active Directory admin center.<br>
    Exchange Admin.<br>
    Microsoft Endpoint Manager admin center.</p>
  `
},
{
  id: 23,
  type: "single",
  question: `
    <p>You have an Active Directory forest that syncs to an Azure Active Directory (Azure AD) tenant. The tenant uses pass-through authentication.</p>
    <p>A corporate security policy states the following:</p>
    <ul>
      <li>Domain controllers must never communicate directly to the internet.</li>
      <li>Only required software must be installed on servers.</li>
    </ul>
    <p>The Active Directory domain contains the on-premises servers shown in the following table:</p>
    <div style="margin-bottom: 15px;">
      <img src="images/q23_server.jpg" alt="Servers Table" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <p>You need to ensure that users can authenticate to Azure AD if a server fails.</p>
    <p>On which server should you install an additional pass-through authentication agent?</p>
  `,
  options: [
    "Server4",
    "Server2",
    "Server1",
    "Server3"
  ],
  answer: 0, // 0 = Server4 (Option A)
  explanation: `
    <p><strong>Correct Answer: A (Server4)</strong></p>
    <p>The standalone Authentication Agents can be installed on any Windows Server 2016 or later, with TLS 1.2 enabled. The server needs to be on the same Active Directory forest as the users whose passwords you need to validate.</p>
    
  `
},
{
  id: 24,
  type: "single",
  question: `
    <p>You have an Azure Active Directory (Azure AD) tenant named contoso.com that contains an Azure AD enterprise application named App1.</p>
    <p>A contractor uses the credentials of user1@outlook.com.</p>
    <p>You need to ensure that you can provide the contractor with access to App1. The contractor must be able to authenticate as user1@outlook.com.</p>
    <p>What should you do?</p>
  `,
  options: [
    "Run the New-AzureADMSInvitation cmdlet.",
    "Configure the External collaboration settings.",
    "Add a WS-Fed identity provider.",
    "Implement Azure AD Connect."
  ],
  answer: 0, // 0 = Option A
  explanation: `
    <p>In Question, user1@outlook.com.</p><br>
    <p>A is the answers, they are looking for you to invite the user to azure ad. Assume that unless stated otherwise, default config in Azure AD is set, so collaboration settings are already on. "By default, all users in your organization, including B2B collaboration guest users, can invite external users to B2B collaboration. If you want to limit the ability to send invitations, you can turn invitations on or off for everyone, or limit invitations to certain roles."</p>
    <p>https://docs.microsoft.com/en-us/azure/active-directory/external-identities/external-collaboration-settings-configure</p>
  `
},
{
  id: 25,
  type: "single",
  question: `
    <p>You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.</p>
    <p>From the Groups blade in the Azure Active Directory admin center, you assign Microsoft 365 Enterprise E5 licenses to the users.</p>
    <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>
    <p>What should you use?</p>
  `,
  options: [
    "the Administrative units blade in the Azure Active Directory admin center",
    "the Set-AzureAdUser cmdlet",
    "the Groups blade in the Azure Active Directory admin center",
    "the Set-MsolUserLicense cmdlet"
  ],
  answer: 3, // 3 = Option D
  explanation: `
    <p>The Set-MsolUserLicense cmdlet updates the license assignment for a user. This can include adding a new license, removing a license, updating the license options, or any combination of these actions.</p>
    <p>Note:</p>
    <p>There are several versions of this question in the exam. The question has two possible correct answers:</p>
    <p>1. the Licenses blade in the Azure Active Directory admin center</p>
    <p>2. the Set-MsolUserLicense cmdlet</p>
    <p>Other incorrect answer options you may see on the exam include the following:</p>
    <p>• the Identity Governance blade in the Azure Active Directory admin center</p>
    <p>• the Set-WindowsProductKey cmdlet</p>
    <p>• the Set-AzureAdGroup cmdlet</p>
    <p>Reference: https://docs.microsoft.com/en-us/powershell/module/msonline/set-msoluserlicense?view=azureadps-1.0</p>
  `
},
{
  id: 26,
  type: "hotspot",
  question: `
    <p>You have an Azure Active Directory (Azure AD) tenant and an Azure web app named App1.</p>
    <p>You need to provide guest users with self-service sign-up for App1. The solution must meet the following requirements:</p>
    <ul>
      <li>Guest users must be able to sign up by using a one-time password.</li>
      <li>The users must provide their first name, last name, city, and email address during the sign-up process.</li>
    </ul>
    <p>What should you configure in the Azure Active Directory admin center for each requirement?</p>
    <p style="font-size: 13px; color: #555;">NOTE: Each correct selection is worth one point.</p>
    
    <div class="hotspot-container" style="margin-top: 15px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 10px; font-weight: bold; width: 180px;">One-time password:</td>
            <td style="padding: 10px;">
              <select class="inline-select" data-key="otp" style="padding: 6px; width: 100%; max-width: 400px; border: 1px solid #ccc; border-radius: 4px;">
                <option value="">-- Select an Option --</option>
                <option value="A linked subscription">A linked subscription</option>
                <option value="An identity provider">An identity provider</option>
                <option value="Azure AD Privileged Identity Management (PIM)">Azure AD Privileged Identity Management (PIM)</option>
                <option value="The External collaboration settings">The External collaboration settings</option>
              </select>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 10px; font-weight: bold; width: 180px;">User details:</td>
            <td style="padding: 10px;">
              <select class="inline-select" data-key="userdetails" style="padding: 6px; width: 100%; max-width: 400px; border: 1px solid #ccc; border-radius: 4px;">
                <option value="">-- Select an Option --</option>
                <option value="A user flow">A user flow</option>
                <option value="Access reviews">Access reviews</option>
                <option value="An access package">An access package</option>
                <option value="The tenant properties">The tenant properties</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  answer: {
    otp: "An identity provider",
    userdetails: "A user flow"
  },
  explanation: `
    <p>- First you'll enable self-service sign-up for your tenant and federate with the identity providers you want to allow external users to use for sign-in. Then you'll create and customize the sign-up user flow and assign your applications to it.</p><br>
    <p>Reference:<br>
    https://docs.microsoft.com/en-us/azure/active-directory/external-identities/identity-providers<br>
    https://docs.microsoft.com/en-us/azure/active-directory/external-identities/self-service-sign-up-overview</p>
  `
},
{
  id: 27,
  type: "single",
  question: `
    <p>You have an Azure Active Directory (Azure AD) tenant.</p>
    <p>You need to bulk create 25 new user accounts by uploading a template file. Which properties are required in the template file?</p>
  `,
  options: [
    "displayName, identityIssuer, usageLocation, and userType",
    "accountEnabled, givenName, surname, and userPrincipalName",
    "accountEnabled, displayName, userPrincipalName, and passwordProfile",
    "accountEnabled, passwordProfile, usageLocation, and userPrincipalName"
  ],
  answer: 2, // 2 = Option C
  explanation: `
    <p>Name [displayName] -> Required</p>
    <p>User name [userPrincipalName] -> Required<br>
    Initial password [passwordProfile] -> Required,<br>
    Block sign in (Yes/No) [accountEnabled] -> Required</p><br><br>Reference:

https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/users-bulk-add

  `
},
{
  id: 28,
  type: "single",
  question: `
    <p>Your network contains an on-premises Active Directory domain that syncs to an Azure Active Directory (Azure AD) tenant.</p>
    <p>Users sign in to computers that run Windows 10 and are joined to the domain.</p>
    <p>You plan to implement Azure AD Seamless Single Sign-On (Azure AD Seamless SSO). You need to configure the Windows 10 computers to support Azure AD Seamless SSO. What should you do?</p>
  `,
  options: [
    "Configure Sign-in options from the Settings app.",
    "Enable Enterprise State Roaming.",
    "Modify the Intranet Zone settings.",
    "Install the Azure AD Connect Authentication Agent."
  ],
  answer: 2, // 2 = Option C
  explanation: `
    <p>You can gradually roll out Seamless SSO to your users using the instructions provided below. You start by adding the following Azure AD URL to all or selected users' Intranet zone settings by using Group Policy in Active Directory: https://autologon.microsoftazuread-sso.com</p><br>
    <p>In addition, you need to enable an Intranet zone policy setting called Allow updates to status bar via script through Group Policy.</p><br>
    <p>more information in: https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-sso-quick-start<br>
    Reference:<br>
    https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-sso-quick-start</p>
  `
},
{
  id: 29,
  type: "dragdrop",
  question: `
    <p>You need to resolve the recent security incident issues.</p>
    <p>What should you configure for each incident?</p>
    <p>To answer, drag the appropriate policy types to the correct issues. Each policy type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.</p>
    <p style="font-size: 13px; color: #555;">NOTE: Each correct selection is worth one point.</p>
  `,
  items: [
    { id: "item_auth", text: "An authentication method policy" },
    { id: "item_ca", text: "A Conditional Access policy" },
    { id: "item_mfa", text: "An Azure AD MFA registration policy" },
    { id: "item_signin", text: "A sign-in risk policy" },
    { id: "item_user", text: "A user risk policy" }
  ],
  targets: [
    { id: "target_leaked", label: "Leaked credentials:" },
    { id: "target_browser", label: "A sign-in from a suspicious browser:" },
    { id: "target_ip", label: "Resources accessed from an anonymous IP address:" }
  ],
  answer: {
    target_leaked: "item_user",
    target_browser: "item_signin",
    target_ip: "item_signin"
  },
  explanation: `
    <p>Box 1: A user risk policy -</p>
    <p>User-linked detections include:</p>
    <p>Leaked credentials: This risk detection type indicates that the user's valid credentials have been leaked. When cyber criminals compromise valid passwords of legitimate users, they often share those credentials.</p>
    <p>User risk policy.</p>
    <p>Identity Protection can calculate what it believes is normal for a user's behavior and use that to base decisions for their risk. User risk is a calculation of probability that an identity has been compromised. Administrators can make a decision based on this risk score signal to enforce organizational requirements. Administrators can choose to block access, allow access, or allow access but require a password change using Azure AD self-service password reset.</p>
    
    <p>Box 2: A sign-in risk policy -</p>
    <p>Suspicious browser: Suspicious browser detection indicates anomalous behavior based on suspicious sign-in activity across multiple tenants from different countries in the same browser.</p>
    
    <p>Box 3: A sign-in risk policy -</p>
    <p>A sign-in risks include activity from anonymous IP address: This detection is discovered by Microsoft Defender for Cloud Apps. This detection identifies that users were active from an IP address that has been identified as an anonymous proxy IP address.</p>
    
    <p>Note: The following three policies are available in Azure AD Identity Protection to protect users and respond to suspicious activity. You can choose to turn the policy enforcement on or off, select users or groups for the policy to apply to, and decide if you want to block access at sign-in or prompt for additional action.</p>
    <ul>
      <li><strong>User risk policy</strong><br>Identifies and responds to user accounts that may have compromised credentials. Can prompt the user to create a new password.</li>
      <li><strong>Sign in risk policy</strong><br>Identifies and responds to suspicious sign-in attempts. Can prompt the user to provide additional forms of verification using Azure AD Multi-Factor Authentication.</li>
      <li><strong>MFA registration policy</strong><br>Makes sure users are registered for Azure AD Multi-Factor Authentication. If a sign-in risk policy prompts for MFA, the user must already be registered for Azure AD Multi-Factor Authentication. Currently supported risk detections are Sign-in risk detections:<br>
      Activity from anonymous IP address, Additional risk detected, Admin confirmed user compromised, Anomalous Token, Anonymous IP address, Atypical travel, Azure AD threat intelligence, Impossible travel, Malicious IP address, Malware linked IP address, Mass Access to Sensitive Files, New country, Password spray, Suspicious browser, Suspicious inbox forwarding, Suspicious inbox manipulation rules, Token Issuer Anomaly, Unfamiliar sign-in properties.</li>
    </ul>
    <p>User risk detections:<br>
    Additional risk detected, Anomalous user activity, Azure AD threat intelligence, Leaked credentials, Possible attempt to access Primary Refresh Token (PRT)</p>
    <p>https://learn.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks<br>
    Reference: https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-policies</p>
  `
},
{
  id: 30,
  type: "hotspot",
  question: `
    <p>You have an Azure Active Directory (Azure AD) tenant that has an Azure Active Directory Premium Plan 2 license. The tenant contains the users shown in the following table:</p>
    <div style="margin-bottom: 15px;">
      <img src="images/q30_members_directory.jpg" alt="Users Table" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>For which users can you configure the Job title property and the Usage location property in Azure AD?</p>
    <p>To answer, select the appropriate options in the answer area.</p>
    <p style="font-size: 13px; color: #555;">NOTE: Each correct selection is worth one point.</p>
    
    <div class="answer-area" style="margin-top: 15px;">
      <p><strong>Answer Area</strong></p>
      
      <!-- Job title horizontal row -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <label style="font-weight: 600; min-width: 170px; white-space: nowrap;">Job title property:</label>
        <select class="inline-select" data-key="job_title" style="padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px;">
          <option value="">-- Select --</option>
          <option value="User2 only">User2 only</option>
          <option value="User2 and User3 only">User2 and User3 only</option>
          <option value="User1, User2, and User3">User1, User2, and User3</option>
        </select>
      </div>

      <!-- Usage location horizontal row -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <label style="font-weight: 600; min-width: 170px; white-space: nowrap;">Usage location property:</label>
        <select class="inline-select" data-key="usage_location" style="padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px;">
          <option value="">-- Select --</option>
          <option value="User2 only">User2 only</option>
          <option value="User2 and User3 only">User2 and User3 only</option>
          <option value="User1, User2, and User3">User1, User2, and User3</option>
        </select>
      </div>
    </div>
  `,
  answer: {
    job_title: "User2 and User3 only",
    usage_location: "User1, User2, and User3"
  },
  explanation: `
    <p>Box 1: User2 and User3 only.</p>
    <p>This selection likely applies a filter or condition that limits the scope of an operation, report, or policy to users who are associated with specific job titles.</p>
    <p>"User2 and User3 only" restricts the operation to these users, possibly because their roles or responsibilities are relevant to the context being managed.</p>

    <p>Box 2: User1, User2, and User3 -</p>
    <p>Invite users with Azure Active Directory B2B collaboration, Update user's name and usage location.</p>
    <p>To assign a license, the invited user's Usage location must be specified. Admins can update the invited user's profile on the Azure portal.</p>
    <ol>
      <li>Go to Azure Active Directory > Users and groups > All users. If you don't see the newly created user, refresh the page.</li>
      <li>Click on the invited user, and then click Profile.</li>
      <li>Update First name, Last name, and Usage location.</li>
      <li>Click Save, and then close the Profile blade.</li>
    </ol>
  `
},
{
  id: 31,
  type: "single",
  question: `
    <p>You have an Azure Active Directory (Azure AD) tenant that contains a user named User1.</p>
    <p>You need to ensure that User1 can create new catalogs and add resources to the catalogs they own. What should you do?</p>
  `,
  options: [
    "From the Roles and administrators blade, modify the Groups administrator role.",
    "From the Roles and administrators blade, modify the Service support administrator role.",
    "From the Identity Governance blade, modify the Entitlement management settings.",
    "From the Identity Governance blade, modify the roles and administrators for the General catalog."
  ],
  answer: 2, // 2 = Option C
  explanation: `
    <p>The Licenses blade in the Azure Active Directory admin center.</p>
    <br>
    <p>To remove licenses with the least amount of administrative effort in this scenario, you should use the bulk management features available in the Azure portal.</p>
    <br>
    <p><strong>Why the Licenses Blade is the best choice:</strong></p>
    <br>
    <p>When you have a large number of users (2,500), manually editing individual profiles is impossible, and scripting can be prone to errors if not handled carefully. The Licenses blade provides a centralized interface to manage license assignments across the entire tenant.</p>
    <br>
    <p><strong>Bulk Operations:</strong> You can select the Office 365 Enterprise E3 product, see all "Licensed users," select them all (or filtered groups), and click Remove license in one workflow.</p>
    <p><strong>Visual Validation:</strong> It allows you to quickly verify that the E5 licenses (assigned via groups) are active before you strip the E3 licenses, ensuring no loss of service.</p>
  `
},
{
  id: 32,
  type: "single",
  question: `
    <p>Your network contains an on-premises Active Directory domain that syncs to an Azure Active Directory (Azure AD) tenant.</p>
    <p>Users sign in to computers that run Windows 10 and are joined to the domain.</p>
    <p>You plan to implement Azure AD Seamless Single Sign-On (Azure AD Seamless SSO). You need to configure the Windows 10 computers to support Azure AD Seamless SSO. What should you do?</p>
  `,
  options: [
    "Configure Sign-in options from the Settings app.",
    "Enable Enterprise State Roaming.",
    "Modify the Local intranet Zone settings.",
    "Install the Azure AD Connect Authentication Agent."
  ],
  answer: 2, // 2 = Option C
  explanation: `
    <p>The question states: You need to configure the Windows 10 computers to support Azure AD Seamless SSO. The catch is, "configure the Windows 10 computers.</p>
    <br>
    <p>https://docs.microsoft.com/en-us/azure/active-directory/hybrid/how-to-connect-sso-quick-start</p>
  `
},
{
  id: 33,
  type: "single",
  question: `
    <p>Your company has two divisions named Contoso East and Contoso West. The Microsoft 365 identity architecture for both divisions is shown in the following exhibit</p>
    <div style="margin-bottom: 15px;">
      <img src="images/q33_skitch.jpg" alt="Identity Architecture Exhibit" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
    </div>
    <p>You need to assign users from the Contoso East division access to Microsoft SharePoint Online sites in the Contoso West tenant.</p>
    <p>The solution must not require additional Microsoft 365 licenses. What should you do?</p>
  `,
  options: [
    "Configure Azure AD Application Proxy in the Contoso West tenant.",
    "Invite the Contoso East users as guests in the Contoso West tenant.",
    "Deploy a second Azure AD Connect server to Contoso East and configure the server to sync the Contoso East Active Directory forest to the Contoso West tenant.",
    "Configure the existing Azure AD Connect server in Contoso East to sync the Contoso East Active Directory forest to the Contoso West tenant."
  ],
  answer: 1, // 1 = Option B
  explanation: `
    <p>Before any of your users can grant SharePoint Online team site access to external guests, you will have to enable guest sharing from within Azure Active Directory.</p>
    <br>
    <p>Reference: https://redmondmag.com/articles/2020/03/11/guest-access-sharepoint-online-team-sites.aspx    https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/multi-tenant-common-considerations</p>
  `
},
{
  id: 34,
  type: "dragdrop",
  question: `
    <p><strong>Question 34: Drag and Drop</strong></p>
    <p>You have a Microsoft 365 E5 subscription that contains two users named User1 and User2.</p>
    <p>You need to ensure that User1 can create access reviews for groups, and that User2 can review the history report for all the completed access reviews.</p>
    <p>The solution must use the principle of least privilege. Which role should you assign to each user?</p>
    <p>To answer, drag the appropriate roles to the correct users. Each role may be used once, more than once, or not at all.</p>
    <p style="font-size: 13px; color: #555;">NOTE: Each correct selection is worth one point.</p>
  `,
  items: [
    { id: "role1", text: "Global administrator" },
    { id: "role2", text: "Global reader" },
    { id: "role3", text: "Reports reader" },
    { id: "role4", text: "Security operator" },
    { id: "role5", text: "Security reader" },
    { id: "role6", text: "User administrator" }
  ],
  targets: [
    { id: "user1_role", label: "User1:" },
    { id: "user2_role", label: "User2:" }
  ],
  answer: {
    user1_role: "role6", // User administrator
    user2_role: "role5"  // Security reader
  },
  explanation: `
    <p>User1: User Administrator.</p>
    <p>"Create, update, or delete access review of a group or of an app"</p>
    <br>
    <p>User2: Security Reader.</p>
    <p>"Read access review of a Microsoft Entra role"</p>
    <br>
    <p>Reference: https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/delegate-by-task</p>
  `
},
{
  id: 35,
  type: "hotspot",
  question: `
    <p>You have an Azure subscription.</p>
    <p>You need to create two custom roles named Role1 and Role2. The solution must meet the following requirements:</p>
    <ul>
      <li>Users that are assigned Role1 can create or delete instances of Azure Container Apps.</li>
      <li>Users that are assigned Role2 can enforce adaptive network hardening rules.</li>
    </ul>
    <p>Which resource provider permissions are required for each role? To answer, select the appropriate options in the answer area.</p>
    <p style="font-size: 13px; color: #555;">NOTE: Each correct selection is worth one point.</p>
    
    <div class="answer-area" style="margin-top: 15px; border: 1px solid #e0e0e0; padding: 15px; border-radius: 6px; background: #fafafa;">
      <p><strong>Answer Area</strong></p>
      
      <!-- Role 1 row -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
        <label style="font-weight: 600; min-width: 60px;">Role1:</label>
        <select class="inline-select" data-key="role1_provider" style="padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px; background: white;">
          <option value="">-- Select --</option>
          <option value="Microsoft.App">Microsoft.App</option>
          <option value="Microsoft.Compute">Microsoft.Compute</option>
          <option value="Microsoft.Management">Microsoft.Management</option>
          <option value="Microsoft.Security">Microsoft.Security</option>
        </select>
      </div>

      <!-- Role 2 row -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 5px;">
        <label style="font-weight: 600; min-width: 60px;">Role2:</label>
        <select class="inline-select" data-key="role2_provider" style="padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px; background: white;">
          <option value="">-- Select --</option>
          <option value="Microsoft.App">Microsoft.App</option>
          <option value="Microsoft.Compute">Microsoft.Compute</option>
          <option value="Microsoft.Network">Microsoft.Network</option>
          <option value="Microsoft.Security">Microsoft.Security</option>
        </select>
      </div>
    </div>
  `,
  answer: {
    role1_provider: "Microsoft.App",
    role2_provider: "Microsoft.Security"
  },
  explanation: `
    <p><strong>Role1: Microsoft.App.</strong></p>
    <p>Role1 requires permissions to create or delete instances of Azure Container Apps. The relevant resource provider for Azure Container Apps is Microsoft.App. This provider includes the necessary permissions to manage container app instances.</p>
    <br>
    <p><strong>Role2: Microsoft.Security.</strong></p>
    <p>Role2 needs to enforce adaptive network hardening rules, which are part of Azure Security Center's capabilities. The Microsoft.Security resource provider contains the permissions required to enforce adaptive network hardening and other security-related configuration.</p>
  `
},
{
  id: 36,
  type: "hotspot",
  question: `
    <p>You have a Microsoft 365 tenant that has 5,000 users. One hundred of the users are executives. The executives have a dedicated support team.</p>
    <p>You need to ensure that the support team can reset passwords and manage multi-factor authentication (MFA) settings for only the executives. The solution must use the principle of least privilege.</p>
    <p>Which object type and Azure Active Directory (Azure AD) role should you use? To answer, select the appropriate options in the answer area.</p>
    <p style="font-size: 13px; color: #555;">NOTE: Each correct selection is worth one point.</p>
    
    <div class="answer-area" style="margin-top: 15px; border: 1px solid #e0e0e0; padding: 15px; border-radius: 6px; background: #fafafa;">
      <p><strong>Answer Area</strong></p>
      
      <!-- Object Type row -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
        <label style="font-weight: 600; min-width: 100px;">Object type:</label>
        <select class="inline-select" data-key="object_type" style="padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px; background: white;">
          <option value="">-- Select --</option>
          <option value="An administrative unit">An administrative unit</option>
          <option value="A custom administrator role">A custom administrator role</option>
          <option value="A dynamic group">A dynamic group</option>
          <option value="A Microsoft 365 group">A Microsoft 365 group</option>
        </select>
      </div>

      <!-- Role row -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 5px;">
        <label style="font-weight: 600; min-width: 100px;">Role:</label>
        <select class="inline-select" data-key="role_name" style="padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px; background: white;">
          <option value="">-- Select --</option>
          <option value="Authentication administrator">Authentication administrator</option>
          <option value="Groups administrator">Groups administrator</option>
          <option value="Helpdesk administrator">Helpdesk administrator</option>
          <option value="Password administrator">Password administrator</option>
        </select>
      </div>
    </div>
  `,
  answer: {
    object_type: "An administrative unit",
    role_name: "Authentication administrator"
  },
  explanation: `
    <p><strong>Object Type: Administrative Unit.</strong></p>
    <p>An administrative unit (AU) is a container for grouping users, groups, and devices within Azure AD. It's used to delegate administrative permissions over a subset of your organization's directory.</p>
    <br>
    <p><strong>Role: Authentication administrator.</strong></p>
    <p>The Authentication administrator is a built-in Azure AD role that grants permissions related to authentication methods and password management for non-administrator users.</p>
  `
},
{
  id: 37,
  type: "single",

  question: `
    <p>
      You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the following table.
    </p>

    <div style="margin:15px 0; text-align:center;">
      <img src="images/q37_users_group.jpg" alt="Users and Groups Table" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:4px;" />
    </div>

    <p>
      You have an administrative unit named <strong>AU1</strong>.
    </p>

    <p>
      <li>Group1 is a member of AU1.</li>
      <li>User2 is a member of AU1.</li>
      <li>User3 is a member of AU1.</li>
      <li>User5 is assigned the <strong>User Administrator</strong> role for AU1.</li>
    </p>

    <p>
      For which users can User5 reset passwords?
    </p>
  `,

  options: [
    "User1, User2, and User3",
    "User1 and User2 only",
    "User3 and User4 only",
    "User2 and User3 only"
  ],

  answer: 3,

  explanation: `
    <p>
      <strong>Correct Answer: D (User2 and User3 only)</strong>
    </p>

    <p>
      Administrative units scope administrative permissions only to objects that are
      direct members of the administrative unit.
    </p>

    <p>
      User2 and User3 are direct members of AU1, therefore User5 can perform
      password reset operations on those users.
    </p>

    <p>
      Although Group1 is a member of AU1, its members do not automatically
      become members of the administrative unit. Administrative unit scope
      does not flow through group membership.
    </p>

    <p>
      As a result, User5 cannot manage users simply because they belong to Group1.
    </p>

    <p>
      Reference:
      <a href="https://learn.microsoft.com/en-us/azure/active-directory/roles/administrative-units"
         target="_blank">
         Microsoft Learn - Administrative Units
      </a>
    </p>
  `
},
{
  id: 38,
  type: "single",

  question: `
    <p>
      You have an Azure Active Directory (AzureAD) tenant that contains the users shown in the following table:
    </p>

    <div style="margin:15px 0; text-align:center;">
      <img src="images/q38_name_location.jpg" alt="Users Table" style="max-width:100%; height:auto; border:1px solid #ccc; border-radius:4px;" />
    </div>

    <p>
     You create a dynamic user group and configure the following rule syntax:
    </p>

    <p>
      <code>user.usageLocation -in ["US","AU"] -and (user.department -eq "Sales") -and -not (user.jobTitle -eq "Manager") –or (user.jobTitle -eq "SalesRep")</code>
    </p>

    <p>
      Which users will be added to the group?
    </p>
  `,

  options: [
    "User1 only",
    "User2 only",
    "User3 only",
    "User1 and User2 only",
    "User1 and User3 only",
    "User1, User2, and User3"
  ],

  answer: 3, // Index 3 corresponds to "User1 and User2 only"

  explanation: `
    <p>
      <strong>Correct Answer: D (User1 and User2 only)</strong>
    </p>
    <p>
      According to operators precedence we can consider the following parenthesis: (statement1 -and statement2 - and statement3) -or (statement4). So, the results is the sub-result of the first parenthesis plus the results of the second one. So, it's D.
    </p>
  `
},
{
  id: 39,
  type: "single",

  question: `
    <p>
      You have an Azure AD tenant that contains a user named User1.
    </p>
    <p>
      User1 needs to manage license assignments and reset user passwords.
    </p>
    <p>
      Which role should you assign to User1?
    </p>
  `,

  options: [
    "A. Helpdesk Administrator",
    "B. License Administrator",
    "C. User Administrator",
    "D. User administrator",
  ],

  answer: 3, // Index 3 corresponds to D

  explanation: `
    <p>
      <strong>Correct Answer: D</strong>
    </p>
    <p>
      D. Is Correct - Neither of the other Roles have permissions to handle all of the statements.
    </p>
  `
},
{
  id: 40,
  type: "single",

  question: `
    <p>
      You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.
    </p>
    <p>
      From the Groups blade in the Azure Active Directory admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.
    </p>
    <p>
      You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.
    </p>
    <p>
      What should you use?
    </p>
  `,

  options: [
    "the Set-MsolUserLicense cmdlet",
    "the Set-AzureADGroup cmdlet",
    "the Set-WindowsProductKey cmdlet",
    "the Administrative units blade in the Azure Active Directory admin center"
  ],

  answer: 0, // Index 0 corresponds to A

  explanation: `
    <p>
      <strong>Correct Answer: A</strong>
    </p>
    <p>
      The Set-MsolUserLicense and New-MsolUser (-LicenseAssignment) cmdlets are scheduled to be retired. Please migrate your scripts to the Microsoft Graph SDK's Set-MgUserLicense cmdlet as described above. For more information, see Migrate your apps to access the license managements APIs from Microsoft Graph
    </p>
  `
},
{
  id: 41,
  type: "single",

  question: `
    <p>
      You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.
    </p>
    <p>
      From the Groups blade in the Azure Active Directory admin center, you assign Microsoft 365 Enterprise E5 licenses to a group that includes all the users.
    </p>
    <p>
      You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.
    </p>
    <p>
      What should you use?
    </p>
  `,

  options: [
    "the Set-AzureADGroup cmdlet",
    "the Identity Governance blade in the Azure Active Directory admin center",
    "the Set-WindowsProductKey cmdlet",
    "the Set-MsolUserLicense cmdlet"
  ],

  answer: 3, // Index 3 corresponds to D

  explanation: `
    <p>
      <strong>Correct Answer: D</strong>
    </p>
    <p>
      D. the Set-MsolUserLicense cmdlet. Why this is the best approach: While you can manage licenses through the GUI, using PowerShell with the Set-MsolUserLicense cmdlet is the most efficient way to perform a bulk removal with least administrative effort. You can pipe a list of all users (or the group members directly into this command to remove the E3 license string globally in one go.
    </p>
    <p>
      The command would look something like this: Set-MsolUserLicense -UserPrincipalName $User -RemoveLicenses "reseller-account:ENTERPRISEPACK" (where ENTERPRISEPACK is the technical name for E3).
    </p>
  `
}
];
