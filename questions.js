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
    </div>

    <p style="text-align: left; margin-top: 10px;">A user named <strong>bsmith@fabrikam.com</strong> shares a Microsoft SharePoint Online document library to the users shown in the following table.</p>

    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q3_table1.jpg" alt="q3 table 1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p style="text-align: left;">Which users will receive a one-time passcode (OTP)?</p>
  `,
  options: [
    "User2 only",
    "User1 and User2 only",
    "User1, User2, and User3",
    "User3 only"
  ],
  answer: 0,
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
      <li><strong>User 3:</strong> Is an internal domain user, so they will not receive a guest OTP.</li>
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
    "B. Billing Administrator",
    "C. License Administrator",
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
},
{
  id: 42,
  type: "dropdown",
  question: `
    <p><strong>Question 42: Hotspot</strong></p>
    <p>Your on-premises network contains an Active Directory domain that uses Azure AD Connect to sync with an Azure AD tenant.</p>
    <p>You need to configure Azure AD Connect to meet the following requirements:</p>
    <ul>
      <li>User sign-ins to Azure AD must be authenticated by an Active Directory domain controller.</li>
      <li>Active Directory domain users must be able to use Azure AD self-service password reset (SSPR).</li>
    </ul>
    <p>What should you use for each requirement? To answer, select the appropriate options in the answer area.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

    <div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
      <p style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <strong style="flex: 1; text-align: left; padding-right: 15px;">Authentication by the domain controller:</strong> 
        <select class="inline-select" data-key="authController" style="flex: 1; max-width: 320px; padding: 6px;">
          <option value="">-- Select Option --</option>
          <option value="Federation with Active Directory Federation Services (AD FS)">Federation with Active Directory Federation Services (AD FS)</option>
          <option value="Pass-through authentication">Pass-through authentication</option>
          <option value="Password hash synchronization">Password hash synchronization</option>
        </select>
      </p>
      
      <p style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0;">
        <strong style="flex: 1; text-align: left; padding-right: 15px;">SSPR:</strong> 
        <select class="inline-select" data-key="sspr" style="flex: 1; max-width: 320px; padding: 6px;">
          <option value="">-- Select Option --</option>
          <option value="Device writeback">Device writeback</option>
          <option value="Group writeback">Group writeback</option>
          <option value="Password hash synchronization">Password hash synchronization</option>
          <option value="Password writeback">Password writeback</option>
        </select>
      </p>
    </div>
  `,
  answer: {
    authController: "Pass-through authentication",
    sspr: "Password writeback"
  },
  explanation: `
    <p>
      pass-through auth<br>
      password write back
    </p>
  `
},
{
  id: 43,
  type: "single",

  question: `
    <p>
      You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.
    </p>
    <p>
      From the Groups blade in the Azure Active Directory admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.
    </p>
    <p>
      You needed to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.
    </p>
    <p>
      What should you use?
    </p>
  `,

  options: [
    "the Groups blade in the Azure Active Directory admin center",
    "the Set-AzureADGroup cmdlet",
    "the Identity Governance blade in the Azure Active Directory admin center",
    "the Set-MsolUserLicense cmdlet"
  ],

  answer: 3, // Index 3 corresponds to D

  explanation: `
    <p>
      <strong>A. the Groups blade in the Azure Active Directory admin center</strong><br>
      Incorrect. Group-based licensing works well for assigning licenses, but it does not automatically remove licenses that were assigned directly to users. Even after assigning E5 via group, E3 will remain unless explicitly removed.
    </p>
    <p>
      <strong>B. the Set-AzureADGroup cmdlet</strong><br>
      Incorrect. This cmdlet is used for managing group properties and membership, not for modifying or removing user licenses.
    </p>
    <p>
      <strong>C. the Identity Governance blade in the Azure Active Directory admin center</strong><br>
      Incorrect. Identity Governance focuses on access reviews, entitlement management, and lifecycle processes. It does not handle bulk license removal.
    </p>
    <p>
      <strong>D. the Set-MsolUserLicense cmdlet</strong><br>
      Correct. This PowerShell cmdlet is specifically designed to assign or remove licenses at scale. Using it, you can bulk remove the E3 licenses from all 2,500 users in a single script, making it the most efficient and least effort solution.
    </p>
  `
},
{
  id: 44,
  type: "single",

  question: `
    <p>
      You have an Active Directory forest that syncs to an Azure AD tenant.
    </p>
    <p>
      You discover that when a user account is disabled in Active Directory, the disabled user can still authenticate to Azure AD for up to 30 minutes.
    </p>
    <p>
      You need to ensure that when a user account is disabled in Active Directory, the user account is immediately prevented from authenticating to Azure AD.
    </p>
    <p>
      <strong>Solution:</strong> You configure conditional access policies. Does this meet the goal?
    </p>
  `,

  options: [
    "Yes",
    "No"
  ],

  answer: 1, // Index 1 corresponds to No

  explanation: `
    <p>
      <strong>B. No.</strong>
    </p>
    <p>
      Why this doesn't meet the goal: Configuring Conditional Access (CA) policies will not solve the "immediate" requirement because CA policies are only evaluated during the authentication process. If a user already has an active session and a valid Access Token, they can continue to access resources until that token expires (typically 60–90 minutes) or until a Continuous Access Evaluation (CAE) event is triggered. Simply disabling the account in on-premises Active Directory (AD) does not instantly kill existing cloud sessions.
    </p>
  `
},
{
  id: 45,
  type: "single",
  question: `
    <div style="border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;">
      <strong>Scenario (Questions 45-46):</strong><br>
      This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>
      <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>
      You have a Microsoft 365 E5 subscription. You create a user named User1.<br>
      You need to ensure that User1 can update the status of Identity Secure Score improvement actions.
    </div>
    <p><strong>Question 45</strong></p>
    <p><strong>Solution:</strong> You assign the Exchange Administrator role to User1. Does this meet the goal?</p>
  `,
  options: ["Yes", "No"],
  answer: 1, // B = No
  explanation: `
    <p><strong>A. Yes</strong><br>
    Incorrect. The Exchange Administrator role is limited to managing Exchange Online settings and does not provide permissions for Identity Secure Score actions.</p>
    <p><strong>B. No</strong><br>
    Correct. Updating Identity Secure Score requires roles like Security Administrator or Global Administrator, not Exchange Administrator.</p>
  `
},
{
  id: 46,
  type: "single",
  question: `
    <div style="border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;">
      <strong>Scenario (Questions 45-46):</strong><br>
      This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>
      <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>
      You have a Microsoft 365 E5 subscription. You create a user named User1.<br>
      You need to ensure that User1 can update the status of Identity Secure Score improvement actions.
    </div>
    <p><strong>Question 46</strong></p>
    <p><strong>Solution:</strong> You assign the User Administrator role to User1. Does this meet the goal?</p>
  `,
  options: ["Yes", "No"],
  answer: 1, // B = No
  explanation: `
    <p><strong>A. Yes</strong><br>
    Incorrect. <p>Why this doesn't meet the goalThe User Administrator role allows a user to manage user accounts (reset passwords, create/delete users), but it does not grant the specific permissions required to modify or update the status of Identity Secure Score improvement actions.</p> <br>
https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/identity-secure-score#read-and-     write-roles
</p>
    <p><strong>B. No</strong><br>
    Correct. Updating Identity Secure Score requires administrative roles with security management permissions (such as Security Administrator or Global Administrator), not a User Administrator role.</p>
  `
},
{
  id: 47,
  type: "dropdown",
  question: `
    <div style="margin-bottom: 15px;">
      <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px;">
        <summary style="font-weight: bold; color: #004085; cursor: pointer;">Case Study Overview</summary>
        <div style="margin-top: 8px; font-size: 13px; color: #004085;">
          Contoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in London and Seattle.<br><br>
          Contoso has a partnership with a company named Fabrikam, Inc. Fabrikam has an Azure Active Directory (Azure AD) tenant named fabrikam.com.
        </div>
      </details>

      <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px;">
        <summary style="font-weight: bold; color: #004085; cursor: pointer;">Existing Environment</summary>
        <div style="margin-top: 8px; font-size: 13px; color: #004085;">
          The on-premises network of Contoso contains an Active Directory domain named contoso.com. The domain contains an organizational unit (OU) named Contoso_Resources. The Contoso_Resources OU contains all users and computers.<br><br>
          Contoso has an Azure AD tenant named contoso.com that has the following associated licenses:<br>
          • Microsoft Office 365 Enterprise E5<br>
          • Enterprise Mobility+ Security E5<br>
          • Windows 10 Enterprise E3<br>
          • Project Plan 3<br><br>
          Azure AD Connect is configured between Azure AD and Active Directory Domain Services (AD DS). Only the Contoso_Resources OU is synced.<br>
          Helpdesk administrators routinely use the Microsoft 365 admin center to manage user settings. User administrators currently use the Microsoft 365 admin center to manually assign licenses. All users have all licenses assigned besides the following exceptions:<br>
          • The users in the London office have the Microsoft 365 Phone System license unassigned.<br>
          • The users in the Seattle office have the Yammer Enterprise license unassigned.<br><br>
          Security defaults are disabled for contoso.com. Contoso uses Azure AD Privileged Identity Management (PIM) to protect administrative roles.
        </div>
      </details>
  <details style="border: 1px solid #b8daff; background-color: #fff3cd; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left; transition: all 0.3s ease-in-out;">
        <summary style="font-weight: bold; color: #856404; cursor: pointer; text-align: left;">Exhibit: User Accounts Table</summary>
        <div style="margin: 12px 0; text-align: center;">
          <img src="images/q47_office_location.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
        </div>
      </details>
      <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px;">
        <summary style="font-weight: bold; color: #004085; cursor: pointer;">Problem Statements</summary>
        <div style="margin-top: 8px; font-size: 13px; color: #004085;">
          • Currently, all the helpdesk administrators can manage user licenses throughout the entire Microsoft 365 tenant.<br>
          • The user administrators report that it is tedious to manually configure the different license requirements for each Contoso office.<br>
          • The helpdesk administrators spend too much time provisioning internal and guest access to the required Microsoft 365 services and apps.<br>
          • Currently, the helpdesk administrators can perform tasks by using the User administrator role without justification or approval.<br>
          • When the Logs node is selected in Azure AD, an error message appears stating that Log Analytics integration is not enabled.
        </div>
      </details>

      <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
        <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Technical Requirements</summary>
        <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left;">
          • All users must be synced from AD DS to the contoso.com Azure AD tenant.<br>
          • App1 must have a redirect URI pointed to https://contoso.com/auth-response.<br>
          • License allocation for new users must be assigned automatically based on the location of the user.<br>
          • Fabrikam users must have access to the marketing department’s SharePoint site for a maximum of 90 days.<br>
          • Administrative actions performed in Azure AD must be audited. Audit logs must be retained for one year.<br>
          • The helpdesk administrators must be able to manage licenses for only the users in their respective office.<br>
          • Users must be forced to change their password if there is a probability that the user's identity was compromised.
        </div>
      </details>

    </div>
    
    <p><strong>Question 47: Hotspot</strong></p>
    <p>You need to meet the technical requirements for license management by the help desk administrators.</p>
    <p>What should you create first, and which tool should you use? To answer, select the appropriate options in the answer area.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

    <div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
      <p style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <strong style="flex: 1; text-align: left; padding-right: 15px;">Object to create for each branch office:</strong> 
        <select class="inline-select" data-key="objectToCreate" style="flex: 1; max-width: 320px; padding: 6px;">
          <option value="">-- Select Option --</option>
          <option value="An administrative unit">An administrative unit</option>
          <option value="A custom role">A custom role</option>
          <option value="A Dynamic User security group">A Dynamic User security group</option>
          <option value="An OU">An OU</option>
        </select>
      </p>
      
      <p style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0;">
        <strong style="flex: 1; text-align: left; padding-right: 15px;">Tool to use:</strong> 
        <select class="inline-select" data-key="toolToUse" style="flex: 1; max-width: 320px; padding: 6px;">
          <option value="">-- Select Option --</option>
          <option value="Azure Active Directory admin center">Azure Active Directory admin center</option>
          <option value="Active Directory Administrative Center">Active Directory Administrative Center</option>
          <option value="Active Directory module for Windows PowerShell">Active Directory module for Windows PowerShell</option>
          <option value="Microsoft Purview Compliance portal">Microsoft Purview Compliance portal</option>
        </select>
      </p>
    </div>
  `,
  answer: {
    objectToCreate: "An administrative unit",
    toolToUse: "Azure Active Directory admin center"
  },
  explanation: `
    <p><strong>Object to create: An administrative unit (AU)</strong></p>
    <p>In Microsoft Entra ID (formerly Azure AD), an Administrative Unit is the cloud equivalent of an Organizational Unit (OU). It allows you to partition your directory into logical containers (like "Branch Office A" or "London Office").</p>
    <p><strong>Why it's used:</strong> You can assign a specific user (like a local IT lead) an administrative role (like Helpdesk Administrator) that is scoped only to that AU. This follows the principle of least privilege by ensuring they can only manage users within their own branch, not the entire tenant.</p>
    <p><strong>Tool to use: Azure Active Directory admin center</strong></p>
    <p>Administrative Units are a core identity governance feature, so they are managed within the Azure Active Directory admin center (now known as the Microsoft Entra admin center).</p>
  `
},
 
  {
    id: 48,
    type: "single",
    question: `
      <div style="margin-bottom: 15px; text-align: left;">
        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Case Study - Overview</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            ADatum Corporation is a consulting company in Montreal.
            ADatum recently acquired Vancouver-based company named Litware, Inc.
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Existing Environment - ADatum Environment</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.

            ADatum has a Microsoft 365 E5 subscription. The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.

            ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com. The tenant has Security defaults disabled.

            The tenant contains the users shown in the following table.
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #fff3cd; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left; transition: all 0.3s ease-in-out;">
          <summary style="font-weight: bold; color: #856404; cursor: pointer; text-align: left;">Exhibit: User Accounts Table</summary>
          <div style="margin: 12px 0; text-align: center;">
            <img src="images/q48_user_roles.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Existing Environment - Groups Table</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            The tenant contains the groups shown in the following table.
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #fff3cd; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left; transition: all 0.3s ease-in-out;">
          <summary style="font-weight: bold; color: #856404; cursor: pointer; text-align: left;">Exhibit: User Groups Table</summary>
          <div style="margin: 12px 0; text-align: center;">
            <img src="images/q48_groups.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Existing Environment - Litware Environment & Problem Statements</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            Litware has an AD DS forest named litware.com 
            Existing Environment. 

            Problem Statements ADatum identifies the following issues:
            • Multiple users in the sales department have up to five devices. The sales department users report that sometimes they must contact the support department to join their devices to the Azure AD tenant because they have reached their device limit.

            A recent security incident reveals that several users leaked their credentials, a suspicious browser was used for a sign-in, and resources were accessed from an anonymous IP address.

            When you attempt to assign the Device Administrators role to IT_Group1, the group does NOT appear in the selection list.

            Anyone in the organization can invite guest users, including other guests and non-administrators. 
            The helpdesk spends too much time resetting user passwords.

            Users currently use only passwords for authentication.
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Planned Changes & Technical Requirements</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            Planned Changes:
            ADatum plans to implement the following changes:
            • Configure self-service password reset (SSPR).
            • Configure multi-factor authentication (MFA) for all users.
            • Configure an access review for an access package named Package1.
            • Require admin approval for application access to organizational data.
            • Sync the AD DS users and groups of litware.com with the Azure AD tenant.
            • Ensure that only users that are assigned specific admin roles can invite guest users.
            • Increase the maximum number of devices that can be joined or registered to Azure AD to 10. Requirements. 

            Technical Requirements: ADatum identifies the following technical requirements:
            • Users assigned the User administrator role must be able to request permission to use the role when needed for up to one year.
            • Users must be prompted to register for MFA and provided with an option to bypass the registration for a grace period.
            • Users must provide one authentication method to reset their password by using SSPR. Available methods must include:
            - Email
            - Phone
            - Security questions
            - The Microsoft Authenticator app
            • Trust relationships must NOT be established between the adatum.com and litware.com AD DS domains.
            • The principle of least privilege must be used.
          </div>
        </details>
      </div>

      <p style="text-align: left;"><strong>Question 48</strong></p>
      <p style="text-align: left;">You need to resolve the issue of the sales department users. What should you configure for the Azure AD tenant?</p>
    `,
    options: [
      "A. the Device settings",
      "B. the User settings",
      "C. the Access reviews settings",
      "D. Security defaults"
    ],
    answer: 0,
    explanation: `
      <p><strong>A. the Device settings</strong><br>
      Correct.</p>
      <p><strong>Explanation:</strong><br>
      Azure Portal > Azure AD > Device > Device Settings > in the "Azure AD join and registration settings" section, change the maximum number of devices a user can have in Azure AD.</p>
    `
  },
  {
    id: 49,
    type: "single",
    question: `
      <div style="margin-bottom: 15px; text-align: left;">
        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Case Study - Overview</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            ADatum Corporation is a consulting company in Montreal.
            ADatum recently acquired Vancouver-based company named Litware, Inc.
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Existing Environment - ADatum Environment</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.

            ADatum has a Microsoft 365 E5 subscription. The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.

            ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com. The tenant has Security defaults disabled.

            The tenant contains the users shown in the following table.
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #fff3cd; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left; transition: all 0.3s ease-in-out;">
          <summary style="font-weight: bold; color: #856404; cursor: pointer; text-align: left;">Exhibit: User Accounts Table</summary>
          <div style="margin: 12px 0; text-align: center;">
            <img src="images/q48_user_roles.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Existing Environment - Groups Table</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            The tenant contains the groups shown in the following table.
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #fff3cd; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left; transition: all 0.3s ease-in-out;">
          <summary style="font-weight: bold; color: #856404; cursor: pointer; text-align: left;">Exhibit: User Groups Table</summary>
          <div style="margin: 12px 0; text-align: center;">
            <img src="images/q48_groups.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Existing Environment - Litware Environment & Problem Statements</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            Litware has an AD DS forest named litware.com 
            Existing Environment. 

            Problem Statements ADatum identifies the following issues:
            • Multiple users in the sales department have up to five devices. The sales department users report that sometimes they must contact the support department to join their devices to the Azure AD tenant because they have reached their device limit.

            A recent security incident reveals that several users leaked their credentials, a suspicious browser was used for a sign-in, and resources were accessed from an anonymous IP address.

            When you attempt to assign the Device Administrators role to IT_Group1, the group does NOT appear in the selection list.

            Anyone in the organization can invite guest users, including other guests and non-administrators. 
            The helpdesk spends too much time resetting user passwords.

            Users currently use only passwords for authentication.
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Planned Changes & Technical Requirements</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            Planned Changes:
            ADatum plans to implement the following changes:
            • Configure self-service password reset (SSPR).
            • Configure multi-factor authentication (MFA) for all users.
            • Configure an access review for an access package named Package1.
            • Require admin approval for application access to organizational data.
            • Sync the AD DS users and groups of litware.com with the Azure AD tenant.
            • Ensure that only users that are assigned specific admin roles can invite guest users.
            • Increase the maximum number of devices that can be joined or registered to Azure AD to 10. Requirements. 

            Technical Requirements: ADatum identifies the following technical requirements:
            • Users assigned the User administrator role must be able to request permission to use the role when needed for up to one year.
            • Users must be prompted to register for MFA and provided with an option to bypass the registration for a grace period.
            • Users must provide one authentication method to reset their password by using SSPR. Available methods must include:
            - Email
            - Phone
            - Security questions
            - The Microsoft Authenticator app
            • Trust relationships must NOT be established between the adatum.com and litware.com AD DS domains.
            • The principle of least privilege must be used.
          </div>
        </details>
      </div>

      <p style="text-align: left;"><strong>Question 49</strong></p>
      <p style="text-align: left;">You need to resolve the issue of IT_Group1. What should you do first?</p>
    `,
    options: [
      "A. Change Membership type of IT_Group1 to Dynamic User.",
      "B. Recreate the IT_Group1 group.",
      "C. Change Membership type of IT Group1 to Dynamic Device.",
      "D. Add an owner to IT_Group1."
    ],
    answer: 1,
    explanation: `
      <p><strong>B. Recreate the IT_Group1 group.</strong><br>
      Reasoning: The "issue" typically referred to in this specific scenario is that IT_Group1 was created as a Security Group with a Static membership type, but the organization needs it to function across domains or support dynamic rules that can't be modified in its current state.</p>
      <p><strong>The Membership Type Limitation:</strong> In Microsoft Entra (Azure AD), you cannot change the membership type of an existing group from "Assigned" (Static) to "Dynamic" if the group was synchronized from an on-premises Active Directory or if it was created as a specific group type that doesn't support the conversion.</p>
    `
  },
  {
    id: 50,
    type: "single",
    question: `
      <div style="margin-bottom: 15px; text-align: left;">
        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Case Study - Overview</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            ADatum Corporation is a consulting company in Montreal.
            ADatum recently acquired Vancouver-based company named Litware, Inc.
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Existing Environment - ADatum Environment</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            The on-premises network of ADatum contains an Active Directory Domain Services (AD DS) forest named adatum.com.

            ADatum has a Microsoft 365 E5 subscription. The subscription contains a verified domain that syncs with the adatum.com AD DS domain by using Azure AD Connect.

            ADatum has an Azure Active Directory (Azure AD) tenant named adatum.com. The tenant has Security defaults disabled.

            The tenant contains the users shown in the following table.
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #fff3cd; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left; transition: all 0.3s ease-in-out;">
          <summary style="font-weight: bold; color: #856404; cursor: pointer; text-align: left;">Exhibit: User Accounts Table</summary>
          <div style="margin: 12px 0; text-align: center;">
            <img src="images/q48_user_roles.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Existing Environment - Groups Table</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            The tenant contains the groups shown in the following table.
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #fff3cd; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left; transition: all 0.3s ease-in-out;">
          <summary style="font-weight: bold; color: #856404; cursor: pointer; text-align: left;">Exhibit: User Groups Table</summary>
          <div style="margin: 12px 0; text-align: center;">
            <img src="images/q48_groups.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Existing Environment - Litware Environment & Problem Statements</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            Litware has an AD DS forest named litware.com 
            Existing Environment. 

            Problem Statements ADatum identifies the following issues:
            • Multiple users in the sales department have up to five devices. The sales department users report that sometimes they must contact the support department to join their devices to the Azure AD tenant because they have reached their device limit.

            A recent security incident reveals that several users leaked their credentials, a suspicious browser was used for a sign-in, and resources were accessed from an anonymous IP address.

            When you attempt to assign the Device Administrators role to IT_Group1, the group does NOT appear in the selection list.

            Anyone in the organization can invite guest users, including other guests and non-administrators. 
            The helpdesk spends too much time resetting user passwords.

            Users currently use only passwords for authentication.
          </div>
        </details>

        <details style="border: 1px solid #b8daff; background-color: #e8f4f8; border-radius: 4px; margin-bottom: 8px; padding: 10px; text-align: left;">
          <summary style="font-weight: bold; color: #004085; cursor: pointer; text-align: left;">Planned Changes & Technical Requirements</summary>
          <div style="margin-top: 8px; font-size: 13px; color: #004085; text-align: left; white-space: pre-line;">
            Planned Changes:
            ADatum plans to implement the following changes:
            • Configure self-service password reset (SSPR).
            • Configure multi-factor authentication (MFA) for all users.
            • Configure an access review for an access package named Package1.
            • Require admin approval for application access to organizational data.
            • Sync the AD DS users and groups of litware.com with the Azure AD tenant.
            • Ensure that only users that are assigned specific admin roles can invite guest users.
            • Increase the maximum number of devices that can be joined or registered to Azure AD to 10. Requirements. 

            Technical Requirements: ADatum identifies the following technical requirements:
            • Users assigned the User administrator role must be able to request permission to use the role when needed for up to one year.
            • Users must be prompted to register for MFA and provided with an option to bypass the registration for a grace period.
            • Users must provide one authentication method to reset their password by using SSPR. Available methods must include:
            - Email
            - Phone
            - Security questions
            - The Microsoft Authenticator app
            • Trust relationships must NOT be established between the adatum.com and litware.com AD DS domains.
            • The principle of least privilege must be used.
          </div>
        </details>
      </div>

      <p style="text-align: left;"><strong>Question 50</strong></p>
      <p style="text-align: left;">You need to implement the planned changes for litware.com. What should you configure?</p>
    `,
    options: [
      "A. Azure AD Connect cloud sync between the Azure AD tenant and litware.com",
      "B. Azure AD Connect to include the litware.com domain",
      "C. staging mode in Azure AD Connect for the litware.com domain"
    ],
    answer: 1,
    explanation: `
      <p><strong>B. Azure AD Connect to include the litware.com domain</strong><br>
      Correct.</p>
      <p><strong>Explanation:</strong><br>
      To implement changes for litware.com while adhering to the requirement that no trust relationship exists between the two on-premises domains (adatum.com and litware.com), you should use Azure AD Connect (classic).<br><br>
      <strong>Multi-Forest Support:</strong> A single instance of Azure AD Connect can connect to multiple forest environments, even if those forests have no trust between them. You simply provide separate administrative credentials for each forest during the configuration.<br><br>
      <strong>Feature Completeness:</strong> Standard Azure AD Connect supports advanced features often required in these scenarios, such as device writeback and specific attribute filtering, which are more mature than the CloudSync alternative.</p>
    `
  },
{
  id: 51,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have the Azure resources shown in the following table.</p>
      
      <div style="margin: 12px 0; text-align: center;">
        <img src="images/q51_azure_table.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" alt="Azure Resources Table" />
      </div>

      <p>To which identities can you assign the Contributor role for RG1?</p>
    </div>
  `,
  options: [
    "A. User1 only",
    "B. User1 and Group1 only",
    "C. User1 and VM1 only",
    "D. User1, VM1, and App1 only",
    "E. User1, Group1, VM1, and App1"
  ],
  answer: 4,
  explanation: `
    <p><strong>Explanation:</strong></p>
    <p>In Azure Role-Based Access Control (RBAC), roles such as Contributor can be assigned to the following identity types:</p>
    <ul>
      <li><strong>Users</strong> (Azure AD users)</li>
      <li><strong>Groups</strong> (Azure AD security groups)</li>
      <li><strong>Service Principals</strong> (App registrations in Azure AD)</li>
      <li><strong>Managed Identities</strong> (System-assigned identities for VMs, applications, etc.)</li>
    </ul>
    <p>Therefore, you can assign the Contributor role to <strong>User1, Group1, VM1, and App1</strong>.</p>
  `
},
{
  id: 52,
  type: "dropdown",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have an Azure AD tenant that contains a user named User1. User1 is assigned the User Administrator role. You need to configure External collaboration settings for the tenant to meet the following requirements:</p>
      <ul>
        <li>Guest users must be prevented from querying staff email addresses.</li>
        <li>Guest users must be able to access the tenant only if they are invited by User1.</li>
      </ul>
      <p>Which three settings should you configure? To answer, select the appropriate settings in the answer area.</p>
      <p><em>NOTE: Each correct selection is worth one point.</em></p>

    </div>

    <div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
      <p style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <strong style="flex: 1; text-align: left; padding-right: 15px;">Guest user access restrictions:</strong> 
        <select class="inline-select" data-key="guestAccessRestrictions" style="flex: 1; max-width: 380px; padding: 6px;">
          <option value="">-- Select Option --</option>
          <option value="Guest users have the same access as members (most inclusive)">Guest users have the same access as members (most inclusive)</option>
          <option value="Guest users have limited access to properties and memberships of directory objects">Guest users have limited access to properties and memberships of directory objects</option>
          <option value="Guest user access is restricted to properties and memberships of their own directory objects (most restrictive)">Guest user access is restricted to properties and memberships of their own directory objects (most restrictive)</option>
        </select>
      </p>
      
      <p style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <strong style="flex: 1; text-align: left; padding-right: 15px;">Guest invite restrictions:</strong> 
        <select class="inline-select" data-key="guestInviteRestrictions" style="flex: 1; max-width: 380px; padding: 6px;">
          <option value="">-- Select Option --</option>
          <option value="Anyone in the organization can invite guest users including guests and non-admins (most inclusive)">Anyone in the organization can invite guest users including guests and non-admins (most inclusive)</option>
          <option value="Member users and users assigned to specific admin roles can invite guest users including guests with member">Member users and users assigned to specific admin roles can invite guest users including guests with member</option>
          <option value="Only users assigned to specific admin roles can invite guest users">Only users assigned to specific admin roles can invite guest users</option>
          <option value="No one in the organization can invite guest users including admins (most restrictive)">No one in the organization can invite guest users including admins (most restrictive)</option>
        </select>
      </p>

      <p style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0;">
        <strong style="flex: 1; text-align: left; padding-right: 15px;">Enable guest self-service sign up via user flows:</strong> 
        <select class="inline-select" data-key="enableGuestSelfService" style="flex: 1; max-width: 380px; padding: 6px;">
          <option value="">-- Select Option --</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </p>
    </div>
  `,
  answer: {
    guestAccessRestrictions: "Guest user access is restricted to properties and memberships of their own directory objects (most restrictive)",
    guestInviteRestrictions: "Only users assigned to specific admin roles can invite guest users",
    enableGuestSelfService: "No"
  },
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      Guest user access restrictions: Guest user access is restricted to properties and memberships of their own directory objects (most restrictive) This is the "strict" setting. It prevents guests from seeing the profiles of other users, searching the directory, or viewing group memberships. They can only see their own information. 
      
      Guest invite restrictions: Only users assigned to specific admin roles can invite guest users. 
      By default, any member user can usually invite guests. This setting locks that down so that only people with roles like Global Administrator or Guest Inviter can bring external people into the tenant. 
      
      Enable guest self-service sign up via user flows: 
      No This disables the ability for external users to sign themselves up for access to your applications. Every guest must be manually invited by an admin.
    </div>
  `
},
{
  id: 53,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.</p>
      <p>From the Groups blade in the Azure Active Directory admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.</p>
      <p>You needed to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>
    </div>
  `,
  options: [
    "A. the Groups blade in the Azure Active Directory admin center",
    "B. the Set-AzureAdUser cmdlet",
    "C. the Identity Governance blade in the Azure Active Directory admin center",
    "D. the Licenses blade in the Azure Active Directory admin center"
  ],
  answer: 3,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      A. the Groups blade in the Azure Active Directory admin center                                                                                                    Incorrect.
       
      Group-based licensing does not remove existing direct (individual) license assignments.
       
      B. the Set-AzureADUser cmdlet       Incorrect.
       
      This cmdlet manages user properties, not bulk license removal.
       
      C. the Identity Governance blade in the Azure Active Directory admin center                                                                                                                                              Incorrect.
       
      This is used for access reviews and lifecycle management, not licensing tasks.
       
      D. the Licenses blade in the Azure Active Directory admin center                                                                                                                                                                Correct.
       
      The Licenses blade allows you to view all users assigned a specific license(E3) and perform bulk removal of that license. This makes it the most efficient option within the admin center for removing licenses from many users at once.
    </div>
  `
},
  {
    id: 54,
    type: "single",
    question: `
      <div style="margin-bottom: 15px; text-align: left;">
        <p>Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.</p>
        <p>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</p>
        <p>You have a Microsoft 365 E5 subscription. You create a user named User1.</p>
        <p>You need to ensure that User1 can update the status of Identity Secure Score improvement actions.</p>
        <p><strong>Solution:</strong> You assign the Security Operator role to User1.</p>
        <p><strong>Does this meet the goal?</strong></p>
      </div>
    `,
    options: [
      "A. Yes",
      "B. No"
    ],
    answer: 1, // Index 1 = B
    explanation: `
      <div style="white-space: pre-line; text-align: left;">
        B With read and write access, you can make changes and directly interact with identity secure score. Global administrator, Security administrator Exchange administrator SharePoint administrator, Security Operator has only read access, so he cannot update anything
        https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/identity-secure-score#who-can-use-the-identity-secure-score
      </div>
    `
  },
  {
    id: 55,
    type: "single",
    question: `
      <div style="margin-bottom: 15px; text-align: left;">
        <p>Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.</p>
        <p>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</p>
        <p>You have a Microsoft 365 E5 subscription.</p>
        <p>You create a user named User1.</p>
        <p>You need to ensure that User1 can update the status of Identity Secure Score improvement actions.</p>
        <p><strong>Solution:</strong> You assign the SharePoint Administrator role to User1.</p>
        <p><strong>Does this meet the goal?</strong></p>
      </div>
    `,
    options: [
      "A. Yes",
      "B. No"
    ],
    answer: 1, // Index 1 = B
    explanation: `
      <div style="white-space: pre-line; text-align: left;">
        A. Yes       Incorrect.
         
        The SharePoint Administrator role is limited to managing SharePoint Online settings and does not grant permissions for Identity Secure Score.

        B. No       Correct.
         
        Updating Identity Secure Score requires roles like Security Administrator or Global Administrator, not SharePoint Administrator.
      </div>
    `
  },
{
  id: 56,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have an Azure AD tenant that contains a user named Admin1.</p>
      <p>You need to ensure that Admin1 can perform only the following tasks:</p>
      <ul>
        <li>From the Microsoft 365 admin center, create and manage service requests.</li>
        <li>From the Microsoft 365 admin center, read and configure service health.</li>
        <li>From the Azure portal, create and manage support tickets.</li>
      </ul>
      <p>The solution must minimize administrative effort.</p>
    </div>
  `,
  options: [
    "A. Create an administrative unit and add Admin1.",
    "B. Enable Azure AD Privileged Identity Management (PIM) for Admin1.",
    "C. Assign Admin1 the Helpdesk Administrator role.",
    "D. Create a custom role and assign the role to Admin1."
  ],
  answer: 3,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      D. Create a custom role and assign the role to Admin1.
       
      A custom role allows you to specify highly granular permissions tailored to a user's unique requirements. If you need Admin1 to have only the specified permissions with no additional tasks beyond the ones mentioned, a custom role can be meticulously designed to accomplish this.
       
      For organizations with strict compliance needs or highly specific delegation requirements, creating custom roles might seem like a viable solution.
    </div>
  `
},
{
  id: 57,
  type: "dropdown",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>Your network contains an on-premises Active Directory Domain Services (AD DS) domain that syncs with an Azure AD tenant.</p>
      <p>You need to ensure that user authentication always occurs by validating passwords against the AD DS domain.</p>
      <p>What should you configure, and what should you use? To answer, select the appropriate options in the answer area.</p>
      <p><em>NOTE: Each correct selection is worth one point.</em></p>

      <div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
        <p style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
          <strong style="flex: 1; text-align: left; padding-right: 15px;">Configure:</strong> 
          <select class="inline-select" data-key="configureOption" style="flex: 1; max-width: 320px; padding: 6px;">
            <option value="">-- Select Option --</option>
            <option value="Azure AD Password protection">Azure AD Password protection</option>
            <option value="Cross-tenant synchronization">Cross-tenant synchronization</option>
            <option value="Pass-through authentication">Pass-through authentication</option>
            <option value="Password hash synchronization">Password hash synchronization</option>
          </select>
        </p>
        
        <p style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0;">
          <strong style="flex: 1; text-align: left; padding-right: 15px;">Use:</strong> 
          <select class="inline-select" data-key="useOption" style="flex: 1; max-width: 320px; padding: 6px;">
            <option value="">-- Select Option --</option>
            <option value="Azure AD Connect">Azure AD Connect</option>
            <option value="Microsoft Identity Manager (MIM)">Microsoft Identity Manager (MIM)</option>
            <option value="The Microsoft Entra admin center">The Microsoft Entra admin center</option>
            <option value="The Microsoft Purview compliance portal">The Microsoft Purview compliance portal</option>
          </select>
        </p>
      </div>
    </div>
  `,
  answer: {
    configureOption: "Pass-through authentication",
    useOption: "Azure AD Connect"
  },
  explanation: `
    <p>
      https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-password-ban-bad-on-premises
    </p>
  `
},
{
  id: 58,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have a Microsoft 365 tenant that uses the domain named fabrikam.com. The Guest invite settings for Azure Active Directory (Azure AD) are configured as shown in the exhibit.</p>
      
      <div style="margin: 12px 0; text-align: center;">
        <img src="images/q58_guest_invite.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" alt="Guest Invite Settings Exhibit" />
      </div>

      <p>A user named bsmith@fabrikam.com shares a Microsoft SharePoint Online document library to the users shown in the following table.</p>

      <div style="margin: 12px 0; text-align: center;">
        <img src="images/q58_user_description.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" alt="Users Table" />
      </div>

      <p>Which users will be emailed a passcode?</p>
    </div>
  `,
  options: [
    "A. User2 only",
    "B. User1 only",
    "C. User1 and User2 only",
    "D. User1, User2, and User3"
  ],
  answer: 0,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      In Question, [Email Protected] = bsmith@fabrikam.com 
      https://learn.microsoft.com/en-us/azure/active-directory/external-identities/one-time-passcode
    </div>
  `
},
{
  id: 59,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.</p>
      <p>From the Groups blade in the Azure Active Directory admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.</p>
      <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>
      <p>What should you use?</p>
    </div>
  `,
  options: [
    "A. the Administrative units blade in the Azure Active Directory admin center",
    "B. the Set-MsolUserLicense cmdlet",
    "C. the Groups blade in the Azure Active Directory admin center",
    "D. the Set-WindowsProductKey cmdlet"
  ],
  answer: 1,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      This PowerShell cmdlet is used to adjust licenses for users in the Microsoft 365 admin center and can be used to add, replace, or remove licenses. It allows for bulk operations when used in a script, making it quite efficient for managing licenses for a large number of users.
    </div>
  `
},
{
  id: 60,
  type: "hotspot",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>Your network contains an on-premises Active Directory Domain Services (AD DS) domain that syncs with Azure AD and contains the users shown in the following table.</p>
      
      <div style="margin: 12px 0; text-align: center;">
        <img src="images/q60_table.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" alt="Users Table Exhibit" />
      </div>

      <p>In Azure AD Connect, Domain/OU Filtering is configured as shown in the following exhibit.</p>
      
      <div style="margin: 12px 0; text-align: center;">
        <img src="images/q60_domain_OU.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" alt="Domain OU Filtering Exhibit" />
      </div>

      <p>Azure AD Connect is configured as shown in the following exhibit.</p>
      
      <div style="margin: 12px 0; text-align: center;">
        <img src="images/q60_config.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" alt="Azure AD Connect Configuration Exhibit" />
      </div>

      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
      <p><em>NOTE: Each correct selection is worth one point.</em></p>

      <div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 1px solid #ddd;">
              <th style="text-align: left; padding: 8px;">Statements</th>
              <th style="text-align: center; width: 80px; padding: 8px;">Yes</th>
              <th style="text-align: center; width: 80px; padding: 8px;">No</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; text-align: left;">User1 can use self-service password reset (SSPR) to reset his password.</td>
              <td style="text-align: center; padding: 10px;"><input type="radio" name="stmt1" value="Yes" data-key="stmt1" data-answer="Yes"></td>
              <td style="text-align: center; padding: 10px;"><input type="radio" name="stmt1" value="No" data-key="stmt1" data-answer="Yes"></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px; text-align: left;">If User1 accesses Microsoft Exchange Online, he will be authenticated by an on-premises domain controller.</td>
              <td style="text-align: center; padding: 10px;"><input type="radio" name="stmt2" value="Yes" data-key="stmt2" data-answer="Yes"></td>
              <td style="text-align: center; padding: 10px;"><input type="radio" name="stmt2" value="No" data-key="stmt2" data-answer="Yes"></td>
            </tr>
            <tr>
              <td style="padding: 10px; text-align: left;">User2 can be added to a Microsoft SharePoint Online site as a member.</td>
              <td style="text-align: center; padding: 10px;"><input type="radio" name="stmt3" value="Yes" data-key="stmt3" data-answer="No"></td>
              <td style="text-align: center; padding: 10px;"><input type="radio" name="stmt3" value="No" data-key="stmt3" data-answer="No"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  answer: {
    stmt1: "Yes",
    stmt2: "Yes",
    stmt3: "No"
  },
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      Yes
      Yes
      No
    </div>
  `
},
{
  id: 61,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.</p>
      <p>From the Groups blade in the Azure Active Directory admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.</p>
      <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>
      <p>What should you use?</p>
    </div>
  `,
  options: [
    "A. the Update-MgGroup cmdlet",
    "B. the Licenses blade in the Azure Active Directory admin center",
    "C. the Set-WindowsProductKey cmdlet",
    "D. the Administrative units blade in the Azure Active Directory admi center"
  ],
  answer: 1,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      the Licenses blade in the Azure Active Directory admin center
    </div>
  `
},
{
  id: 62,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have an Azure AD tenant that contains the users shown in the following table.</p>
      
      <div style="margin: 12px 0; text-align: center;">
        <img src="images/q62_table.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" alt="Users Table Exhibit" />
      </div>

      <p>You need to compare the role permissions of each user. The solution must minimize administrative effort.</p>
      <p>What should you use?</p>
    </div>
  `,
  options: [
    "A. the Microsoft 365 Defender portal",
    "B. the Microsoft 365 admin center",
    "C. the Microsoft Entra admin center",
    "D. the Microsoft Purview compliance portal"
  ],
  answer: 1,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      B. the Microsoft 365 admin center.
      
      The Microsoft 365 admin center provides a centralized location where you can view and manage the role permissions of each user in your Azure AD tenant. This will allow you to easily compare the permissions of Admin1, Admin2, and Admin3, thus minimizing administrative effort. The other options do not provide this specific functionality.
    </div>
  `
},
{
  id: 63,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have a Microsoft Exchange organization that uses an SMTP address space of contoso.com. Several users use their contoso.com email address for self-service sign-up to Azure AD.</p>
      <p>You gain global administrator privileges to the Azure AD tenant that contains the self-signed users.</p>
      <p>You need to prevent the users from creating user accounts in the contoso.com Azure AD tenant for self-service sign-up to Microsoft 365 services.</p>
      <p>Which PowerShell cmdlet should you run?</p>
    </div>
  `,
  options: [
    "A. Update-MgOrganization",
    "B. Update-MgPolicyPermissionGrantPolicyExclude",
    "C. Update-MgDomain",
    "D. Update-MgDomainFederationConfiguration"
  ],
  answer: 0,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      A. Update-MgOrganization.
      
      To prevent users from creating accounts in the Azure AD tenant for self-service sign-up, you need to modify. <br> the organization's settings. The Update-MgOrganization cmdlet allows you to configure tenant-wide policies, including disabling self-service sign-up for users.
By using this cmdlet, you can set the appropriate parameters to block self-service sign-up, ensuring that users cannot create accounts in the tenant using their contoso.com email addresses.

    </div>
  `
},
{
  id: 64,
  type: "dropdown",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have an Azure AD tenant.</p>
      <p>You need to configure the following External Identities features:</p>
      <ul style="margin-top: 5px; margin-bottom: 10px;">
        <li>B2B collaboration</li>
        <li>Monthly active users (MAU)-based pricing</li>
      </ul>

      <div style="margin: 15px 0; text-align: center;">
        <img src="images/q64_externalId.jpg" alt="Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
           </div>

      <p>Which settings should you configure? Complete the statements by selecting the appropriate option from each drop-down list.</p>
      <p><em>NOTE: Each correct selection is worth one point.</em></p>

      <div style="margin-top: 15px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
        <div style="display: grid; grid-template-columns: max-content 1fr; gap: 12px 15px; align-items: center;">
          
          <label for="feature1" style="font-weight: bold;">B2B collaboration:</label>
          <select class="inline-select" id="feature1" data-key="feature1" style="padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px;">
            <option value="">-- Select Option --</option>
            <option value="Overview">Overview</option>
            <option value="Cross-tenant access settings">Cross-tenant access settings</option>
            <option value="All identity providers">All identity providers</option>
            <option value="External collaboration settings">External collaboration settings</option>
            <option value="Diagnose and solve problems">Diagnose and solve problems</option>
            <option value="Linked subscriptions">Linked subscriptions</option>
          </select>

          <label for="feature2" style="font-weight: bold;">Monthly active users (MAU)-based pricing:</label>
          <select class="inline-select" id="feature2" data-key="feature2" style="padding: 6px; border-radius: 4px; border: 1px solid #ccc; width: 100%; max-width: 350px;">
            <option value="">-- Select Option --</option>
            <option value="Overview">Overview</option>
            <option value="Cross-tenant access settings">Cross-tenant access settings</option>
            <option value="All identity providers">All identity providers</option>
            <option value="External collaboration settings">External collaboration settings</option>
            <option value="Diagnose and solve problems">Diagnose and solve problems</option>
            <option value="Linked subscriptions">Linked subscriptions</option>
          </select>

        </div>
      </div>
    </div>
  `,
  answer: {
    feature1: "External collaboration settings",
    feature2: "Linked subscriptions"
  },
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      1. External collaboration settings: You go here to control how guest users interact with your tenant. This includes guest user access restrictions, guest invite restrictions, and collaboration restrictions (setting up an "Allow" or "Deny" list for specific domains).
      
      2. Linked subscriptions: This is used for billing configuration. Microsoft Entra External ID uses a "Monthly Active Users" (MAU) billing model linked to an Azure subscription.
    </div>
  `
},
{
  id: 65,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have an Azure AD tenant that contains the external user shown in the following exhibit.</p>
      
      <div style="margin: 12px 0; text-align: center;">
        <img src="images/q65_identity.jpg" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" alt="External User Exhibit" />
      </div>

      <p>You update the email address of the user.</p>
      <p>You need to ensure that the user can authenticate by using the updated email address.</p>
      <p>What should you do for the user?</p>
    </div>
  `,
  options: [
    "A. Modify the Authentication methods settings.",
    "B. Reset the password.",
    "C. Revoke the active sessions.",
    "D. Reset the redemption status."
  ],
  answer: 3,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      D. Reset the redemption status.
      
      You can update the guest user's sign-in information after they've redeemed your invitation for B2B collaboration. There might be times when you'll need to update their sign-in information, for example when the user wants to sign in using a different email.
      
      Previously, you had to manually delete the guest user's account from your directory and reinvite the user. Now you can use the Microsoft Entra admin center, PowerShell or the Microsoft Graph invitation API to reset the user's redemption status and reinvite the user while keeping the user's object ID, group memberships, and app assignments.
    </div>
  `
},
{
  id: 66,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have an Azure AD tenant.</p>
      <p>You need to ensure that only users from specific external domains can be invited as guests to the tenant.</p>
      <p>Which settings should you configure?</p>
    </div>
  `,
  options: [
    "A. External collaboration settings",
    "B. All identity providers",
    "C. Cross-tenant access settings",
    "D. Linked subscriptions"
  ],
  answer: 0,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      The correct answer is A.
      External collaboration settings. External collaboration settings allow you to control who can collaborate with your Azure AD tenant. You can use external collaboration settings to specify which external domains are allowed to be invited as guests to your tenant.
    </div>
  `
},
{
  id: 67,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have an Azure AD tenant that contains a user named User1 and a Microsoft365 group named Group1. User1 is the owner of Group1.</p>
      <p>You need to ensure that User1 is notified every three months to validate the guest membership of Group1.</p>
      <p>What should you do?</p>
    </div>
  `,
  options: [
    "A. Configure the External collaboration settings.",
    "B. Create an access review.",
    "C. Configure an access package.",
    "D. Create a group expiration policy."
  ],
  answer: 1,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      B. Create an access review. In Microsoft Entra (AzureAD), an Access Review is the specific tool designed to automate the periodic re-validation of group memberships or application access.
    </div>
  `
},
{
  id: 68,
  type: "matrix",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have a Microsoft Entra tenant that contains a group named Group3 and an administrative unit named Department1.</p>
      <p>Department1 has the users shown in the Users exhibit. (Click the Users tab.)</p>
      
      <div style="margin: 10px 0; text-align: center;">
        <img src="images/q68_user_exhibit.jpg" alt="Users Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <p>Department1 has the groups shown in the Groups exhibit. (Click the Groups tab.)</p>
      
      <div style="margin: 10px 0; text-align: center;">
        <img src="images/q68_groups.jpg" alt="Groups Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <p>The User Administrator role assignments are shown in the Assignments exhibit. (Click the Assignments tab.)</p>
      
      <div style="margin: 10px 0; text-align: center;">
        <img src="images/q68_admin.jpg" alt="Assignments Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <p>The members of Group2 are shown in the Group2 exhibit. (Click the Group2 tab.)</p>
      
      <div style="margin: 10px 0; text-align: center;">
        <img src="images/q68_group2.1.jpg" alt="Group2 Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
      <p><em>NOTE: Each correct selection is worth one point.</em></p>
    </div>
  `,
  rows: [
    { id: "stmt1", label: "Admin1 can reset the passwords of User3 and User4." },
    { id: "stmt2", label: "Admin1 can add User1 to Group3." },
    { id: "stmt3", label: "Admin3 can reset the password of User1." }
  ],
  answer: {
    stmt1: 1,
    stmt2: 1,
    stmt3: 0
  },
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      1. Admin1 can reset the passwords of User3 and User4. - <strong>No</strong>: This implies that User3 and User4 are either not within Admin1's assigned Administrative Unit or Admin1 lacks the specific Password Administrator role for the scope those users belong to.
      
      2. Admin1 can add User1 to Group3. - <strong>No</strong>: Even if Admin1 has permissions over User1, they cannot add them to Group3 unless they also have the Groups Administrator role or specific "Member" management permissions over Group3 itself.
      
      3. Admin3 can reset the password of User1. - <strong>Yes</strong>: Admin3 has permissions that encompass the scope where User1 resides, allowing password management actions.
    </div>
  `
},
{
  id: 69,
  type: "matrix",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>Your network contains an on-premises Active Directory Domain Services (AD DS) domain named fabrikam.com. The domain contains an Active Directory Federation Services (AD FS) instance and a member server named Server1 that runs Windows Server.</p>
      <p>The domain contains the users shown in the following table.</p>
      
      <div style="margin: 10px 0; text-align: center;">
        <img src="images/q69_table.jpg" alt="Users Table Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <p>You have a Microsoft Entra tenant named contoso.com that is linked to a Microsoft 365 subscription.</p>
      <p>You establish federation between fabrikam.com and contoso.com by using a Microsoft Entra Connect instance that is configured as shown in the following exhibit.</p>
      
      <div style="margin: 10px 0; text-align: center;">
        <img src="images/q69_exhibit.jpg" alt="Optional Features Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <p>You perform the following tasks in contoso.com:</p>
      <ul style="margin-top: 5px; margin-bottom: 10px;">
        <li>Create a group named Group1.</li>
        <li>Disable User2.</li>
        <li>Enable User3.</li>
      </ul>

      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
      <p><em>NOTE: Each correct selection is worth one point.</em></p>
    </div>
  `,
  rows: [
    { id: "stmt1", label: "You can add User1 to Group1." },
    { id: "stmt2", label: "User2 can sign in to Server1." },
    { id: "stmt3", label: "User3 can sign in to Microsoft 365." }
  ],
  answer: {
    stmt1: 1,
    stmt2: 1,
    stmt3: 0
  },
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      You can add User1 to Group1 — <strong>No</strong>: This usually happens if Group1 is a synchronized group from an on-premises Active Directory. In this case, you cannot manage its membership in the cloud; any additions must be made on-premises and synced up. Alternatively, User1's account might be in a "Deleted" or "Soft-deleted" state.

      User2 can sign in to Server1 — <strong>No</strong>: This is often because User2 is a cloud-only user and Server1 is an on-premises server. Without specialized configuration like Azure AD Kerberos or a trust relationship, cloud identities cannot natively log into traditional on-premises Windows servers.

      User3 can sign in to Microsoft 365 — <strong>Yes</strong>: User3 is likely a synchronized user or a cloud-native user with an active account and a valid license. As long as their account is not "Disabled" in the Entra admin center, they can access the M365 portal.
    </div>
  `
},
{
  id: 70,
  type: "matrix",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have a Microsoft Entra tenant that has a Microsoft Entra ID P2 service plan. The tenant contains the users shown in the following table.</p>
      
      <div style="margin: 10px 0; text-align: center;">
        <img src="images/q70_table1.jpg" alt="Users Table Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <p>You have the Device settings shown in the following exhibit.</p>
      
      <div style="margin: 10px 0; text-align: center;">
        <img src="images/q70_exhibit.jpg" alt="Device Settings Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <p>User1 has the devices shown in the following table.</p>
      
      <div style="margin: 10px 0; text-align: center;">
        <img src="images/q70_table2.jpg" alt="User1 Devices Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
      <p><em>NOTE: Each correct selection is worth one point.</em></p>
    </div>
  `,
  rows: [
    { id: "stmt1", label: "User1 can join four additional Windows 10 devices to Microsoft Entra ID." },
    { id: "stmt2", label: "Admin1 can set Devices to be Microsoft Entra joined or Microsoft Entra registered require Multi-Factor Authentication to Yes." },
    { id: "stmt3", label: "Admin2 is a local administrator on Device3." }
  ],
  answer: {
    stmt1: 1,
    stmt2: 0,
    stmt3: 1
  },
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      User1 can join four additional Windows 10 devices to Microsoft Entra ID — <strong>No</strong>: This is typically based on the Maximum number of devices per user setting in Entra ID (default is 50 but often set to a lower number like 5 or 10 in exam scenarios). If User1 has already reached this limit, they are blocked from joining more.

      Admin1 can set Devices to be Microsoft Entra joined or Microsoft Entra registered require Multi-Factor Authentication to Yes — <strong>Yes</strong>: This indicates that Admin1 holds a privileged role, such as Cloud Device Administrator or Global Administrator, which grants the authority to modify tenant-wide device registration policies.

      Admin2 is a local administrator on Device3 — <strong>No</strong>: By default, only the user who joins the device and members of the Cloud Device Administrator or Global Administrator roles are added to the local administrators group on Entra joined devices. If Admin2 is a "User Administrator" or has no specific device-related role, they will not automatically have local admin rights on user's devices.
    </div>
  `
},{
  id: 71,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have an Azure subscription named Sub1 that contains a user named User1.</p>
      <p>You need to ensure that User1 can purchase a Microsoft Entra Permissions Management license for Sub1. The solution must follow the principle of least privilege.</p>
      <p>Which role should you assign to User1?</p>
    </div>
  `,
  options: [
    "A. Global Administrator",
    "B. Billing Administrator",
    "C. Permissions Management Administrator",
    "D. User Access Administrator"
  ],
  answer: 1,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      B. Billing Administrator.
      
      This scenario evaluates your understanding of the Principle of Least Privilege (PoLP) when managing financial transactions and subscription extensions within a Microsoft Entra ID tenant.

      To evaluate this correctly, you must isolate the intent of the task (purchasing a license) from the subject matter of the product (Permissions Management):

      The Core Action: Purchasing a license or starting a trial for any Microsoft Entra enterprise service principal requires data-plane authority over commerce and billing pipelines.

      Role Alignment: The Billing Administrator role possesses the explicit, bounded authority to handle payment information, manage organizational subscriptions, log support tickets, and execute product purchases across the tenant.

      Applying Least Privilege: While a Global Administrator can also purchase licenses, that role grants unrestricted control-plane access over every configuration in the identity platform, which explicitly violates the principle of least privilege. Why the Other Options are Incorrect:
      
      A. Global Administrator: This role has full, omnipotent access to all directory administrative features. It would easily allow the purchase, but assigning it introduces massive unnecessary security risks and violates the strict constraint of choosing the role with the least privilege.
      
      C. Permissions Management Administrator: This role is designed for functional administration after the license has already been acquired and provisioned. It grants complete access to manage permission remediation, discovery settings, and multi-cloud infrastructure mapping within the Permissions Management UI, but it possesses no commerce capabilities and cannot authorize a monetary license purchase transaction.
      
      D. User Access Administrator: This role is an Azure RBAC role used at the resource tier to manage user role assignments, access conditions, and permissions boundaries (such as assigning Owner/Contributor rights to subscriptions or resource groups). It does not hold commerce or billing delegation authority within the Microsoft Entra tenant framework.
    </div>
  `
},
{
  id: 72,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have an Azure subscription that contains a user named User1 and two resource groups named RG1 and RG2. You need to ensure that User1 can perform the following tasks:</p>
      <ul style="margin-top: 5px; margin-bottom: 10px;">
        <li>View all resources.</li>
        <li>Restart virtual machines.</li>
        <li>Create virtual machines in RG1 only.</li>
        <li>Create storage accounts in RG1 only.</li>
      </ul>
      <p>What is the minimum number of role-based access control (RBAC) role assignments required?</p>
    </div>
  `,
  options: [
    "A. 1",
    "B. 2",
    "C. 3",
    "D. 4"
  ],
  answer: 2,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      Minimum Number of Role Assignments:
      
      To meet these requirements, User1 needs a combination of Reader, Virtual Machine Contributor, and Storage Account Contributor roles. Since there is overlap in the roles that allow User1 to restart VMs and create VMs, we can optimize the number of role assignments.

      Reader role at the subscription level.
      
      Virtual Machine Contributor role at RG1 (to allow both VM creation and VM restart in RG1). Storage Account Contributor role at RG1.
      
      Conclusion:
      
      The minimum number of role assignments required is 3. the correct answer is:
      C. 3
    </div>
  `
},{
  id: 73,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You work for a company named Contoso, Ltd. that has a Microsoft Entra tenant named contoso.com. Contoso is working on a project with the following two partner companies:</p>
      <ul style="margin-top: 5px; margin-bottom: 10px;">
        <li>A company named A. Datum Corporation that has a Microsoft Entra tenant named adatum.com.</li>
        <li>A company named Fabrikam, Inc. that has a Microsoft Entra tenant named fabrikam.com.</li>
      </ul>
      <p>When you attempt to invite a new guest user from adatum.com to contoso.com, you receive an error message. You can successfully invite a new guest user from fabrikam.com to contoso.com.</p>
      <p>You need to be able to invite new guest users from adatum.com to contoso.com. What should you configure?</p>
    </div>
  `,
  options: [
    "A. Guest invite settings",
    "B. Verifiable credentials",
    "C. Named locations",
    "D. Collaboration restrictions"
  ],
  answer: 3,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      D. Collaboration restrictions.
      
      To control which external domains your organization can collaborate with via B2B collaboration (guest invitations), Microsoft Entra ID uses External collaboration settings. Within these settings, the specific feature responsible for explicitly allowing or blocking invitations to specific target domains is Collaboration restrictions.
    </div>
  `
},
{
  id: 74,
  type: "single",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>You have an Azure subscription that contains a user-assigned managed identity named Managed1 in the East US Azure region. The subscription contains the resources shown in the following table.</p>
      
      <div style="margin: 10px 0; text-align: center;">
        <img src="images/q74_table.jpg" alt="Resources Table Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <p>Which resource can use Managed1 as their identity?</p>
    </div>
  `,
  options: [
    "A. WebApp1 only",
    "B. storage1 and WebApp1 only",
    "C. VM1 and WebApp1 only",
    "D. VM1, storage1, and WebApp1"
  ],
  answer: 2,
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      C. VM1 and WebApp1 only. Reasoning Managed Identities are designed to provide an identity for compute resources so they can authenticate to other services. VM1 (Virtual Machine): This is a compute resource. It can be assigned a managed identity (Managed1) to allow the OS or applications running inside it to access other Azure resources. WebApp1 (App Service): This is also a compute resource.

      It can use a managed identity to securely connect to back-end services like databases or key vaults without storing credentials in code.
    </div>
  `
},
{
  id: 75,
  type: "dragdrop",
  question: `
    <div style="margin-bottom: 15px; text-align: left;">
      <p>Your network contains an on-premises Active Directory domain named contoso.com that syncs with Microsoft Entra ID by using Microsoft Entra Connect.</p>
      <p>The domain contains the users shown in the following table.</p>
      
      <div style="margin: 10px 0; text-align: center;">
        <img src="images/q75_table1.jpg" alt="Users Table Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <p>From Active Directory Users and Computers, you add the following user:</p>
      <ul style="margin-top: 5px; margin-bottom: 10px;">
        <li>Name: User3</li>
        <li>UPN: user3@contoso.com</li>
        <li>Proxy addresses: smtp:user3@contoso.com, smtp:user3@contoso.onmicrosoft.com</li>
      </ul>
      
      <p>From Active Directory Users and Computers, you update the proxyAddresses attribute for each user as shown in the following table.</p>
      
      <div style="margin: 10px 0; text-align: center;">
        <img src="images/q75_table2.jpg" alt="Proxy Addresses Table Exhibit" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;" />
      </div>

      <p>You trigger a manual synchronization.</p>
      <p>Which sync status will Microsoft Entra Connect sync return for each user? To answer, drag the appropriate status to the correct users.</p>
      <p><em>NOTE: Each correct selection is worth one point.</em></p>
    </div>
  `,
  items: [
    { id: "status1", text: "AttributeValueMustBeUnique error occurs" },
    { id: "status2", text: "InvalidSoftMatch error occurs." },
    { id: "status3", text: "ObjectTypeMismatch error occurs." },
    { id: "status4", text: "Successfully synced" }
  ],
  targets: [
    { id: "target1", label: "User1@contoso.com" },
    { id: "target2", label: "User2@contoso.com" },
    { id: "target3", label: "User3@contoso.com" }
  ],
  answer: {
    target1: "status4", // Successfully synced
    target2: "status1", // AttributeValueMustBeUnique error occurs
    target3: "status2"  // InvalidSoftMatch error occurs.
  },
  explanation: `
    <div style="white-space: pre-line; text-align: left;">
      User1: Successfully synced — This user had a perfect match between their on-premises attributes and the cloud object (or they were a brand new user), allowing the sync engine to link or create the account without conflict.

      User2: AttributeValueMustBeUnique error occurs — This happens when an attribute that must be unique (like ProxyAddresses or UserPrincipalName) is already being used by another object in the cloud. For example, if User2 on-premises has the email sales@contoso.com, but a shared mailbox in the cloud already uses that same address, the sync will fail for User2.

      User3: InvalidSoftMatch error occurs — A "Soft Match" happens when the sync engine tries to join an on-premises user to an existing cloud-only user based on their Primary SMTP address or UserPrincipalName. An InvalidSoftMatch typically means the ImmutableID (the unique anchor) is already set on the cloud object and doesn't match the on-premises user, or the account types are incompatible (e.g., trying to soft-match a user to a group).
    </div>
  `
},
{
  id: 76,
  type: "single",
  question: `
    <p>You have a Microsoft 365 tenant that uses the domain name fabrikam.com.</p>
    <p>The External collaboration settings are configured as shown in the Collaboration exhibit. (Click the Collaboration tab.)</p>
    
    <p>&lt;insert clickable image named: collaboration tab here&gt;</p> 
    
    <p>The Email one-time passcode for guests setting is enabled for the tenant.</p>
    <p>A user named bsmith@fabrikam.com shares a Microsoft SharePoint Online document library to the users shown in the following table.</p>
    
    <p>&lt;insert table here&gt;</p>
    
    <p>Which users will be emailed a passcode?</p>
  `,
  options: [
    "User1 only",
    "User2 only",
    "User1 and User2 only",
    "User1, User2, and User3"
  ],
  answer: 1, // Index 1 correlates to "User2 only"
  explanation: `
    <p><strong>Correct Answer: B (User2 only)</strong></p>
    <p>Here, bsmith@fabrikam.com is an internal user of the tenant domain fabrikam.com.</p><br>
    <p><strong>User3 (Internal User):</strong> Belongs to the same tenant domain (fabrikam.com), so they authenticate natively and do not trigger the guest passcode flow.</p><br>
    <p><strong>User1 (Existing Guest / Account Holder):</strong> Authenticates via their existing Microsoft Entra account, Microsoft account (MSA), or federated identity provider rather than needing a one-time passcode.</p><br>
    <p><strong>User2 (External Guest):</strong> Lacks a pre-existing Microsoft Entra account, Microsoft account, or federated social login. Because the Email one-time passcode for guests feature is enabled, they will receive a one-time passcode via email.</p>
  `
},
{
  id: 77,
  type: "single",
  question: `
    <p>You have an Azure subscription named Sub1 that contains a virtual machine named VM1.</p>
    <p>You need to enable Microsoft Entra login for VM1 and configure VM1 to access the resources in Sub1. Which type of identity should you assign to VM1?</p>
  `,
  options: [
    "Microsoft Entra user account",
    "user-assigned managed identity",
    "Azure Automation account",
    "system-assigned managed identity"
  ],
  answer: 3, // Index 3 correlates to "system-assigned managed identity"
  explanation: `
    <p><strong>Correct Answer: D (system-assigned managed identity)</strong></p>
    <p>System-assigned managed identity: This type of managed identity is enabled directly on an Azure resource. In this case, enabling a system-assigned managed identity on VM1 would allow VM1 to authenticate with other Azure resources within Sub1, using the identity associated with VM1.</p>
  `
},
{
  id: 78,
  type: "single",
  question: `
    <div style="border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;">
      <strong>Scenario (Questions 78-80):</strong><br>
      This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>
      <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>
      You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.<br>
      From the Groups blade in the Microsoft Entra admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.
    </div>
    <p><strong>Question 78</strong></p>
    <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>
    <p><strong>Solution:</strong> You use the the Set-MgUserLicense cmdlet.</p>
  `,
  options: [
    "the Set-WindowsProductKey cmdlet",
    "the Update-MgGroup cmdlet",
    "the Set-MgUserLicense cmdlet",
    "the Update-MgUser cmdlet"
  ],
  answer: 2, // Index 2 correlates to "the Set-MgUserLicense cmdlet"
  explanation: `
    <p><strong>Correct Answer: C (the Set-MgUserLicense cmdlet)</strong></p>
    <p>To remove the Office 365 Enterprise E3 licenses from the users who are now part of a group with Office 365 Enterprise E5 licenses assigned, you should use the Set-MgUserLicense cmdlet. This cmdlet allows you to modify the licenses assigned to a user. By using this cmdlet, you can remove the Office 365 Enterprise E3 licenses from all users who are part of the group where you assigned the Office 365 Enterprise E5 licenses.</p>
  `
},
{
  id: 79,
  type: "single",
  question: `
    <div style="border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;">
      <strong>Scenario (Questions 78-80):</strong><br>
      This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>
      <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>
      You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.<br>
      From the Groups blade in the Microsoft Entra admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.
    </div>
    <p><strong>Question 79</strong></p>
    <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>
    <p><strong>Solution:</strong> You use the Licenses blade in the Microsoft Entra admin center.</p>
  `,
  options: [
    "the Licenses blade in the Microsoft Entra admin center",
    "the Administrative units blade in the Microsoft Entra admin center",
    "the Identity Governance blade in the Microsoft Entra admin center",
    "the Update-MgUser cmdlet"
  ],
  answer: 0, // Index 0 correlates to "the Licenses blade in the Microsoft Entra admin center"
  explanation: `
    <p><strong>Correct Answer: A (the Licenses blade in the Microsoft Entra admin center)</strong></p>
    <p>To remove the Office 365 Enterprise E3 licenses from the users who are now part of a group with Office 365 Enterprise E5 licenses assigned, you should use the "Licenses" blade in the Microsoft Entra admin center. This allows you to manage license assignments at a group level, making it easier to apply and remove licenses for multiple users simultaneously.</p>
  `
},
{
  id: 80,
  type: "single",
  question: `
    <div style="border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;">
      <strong>Scenario (Questions 78-80):</strong><br>
      This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>
      <em>After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.</em><br><br>
      You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.<br>
      From the Groups blade in the Microsoft Entra admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.
    </div>
    <p><strong>Question 80</strong></p>
    <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>
    <p><strong>Solution:</strong> You use the Set-MgUserLicense cmdlet.</p>
  `,
  options: [
    "the Identity Governance blade in the Microsoft Entra admin center",
    "the Update-MgGroup cmdlet",
    "the Set-MgUserLicense cmdlet",
    "the Administrative units blade in the Microsoft Entra admin center"
  ],
  answer: 2, // Index 2 correlates to "the Set-MgUserLicense cmdlet"
  explanation: `
    <p><strong>Correct Answer: C (the Set-MgUserLicense cmdlet)</strong></p>
    <p>The Set-MgUserLicense cmdlet (part of Microsoft Graph PowerShell) allows you to add or remove licenses for a user programmatically.</p><br>
    <p>You can automate the removal of the E3 license from all 2,500 users by scripting the process.</p><br>
    <p>This approach avoids manual removal and provides the least administrative effort compared to doing it through the GUI.</p>
  `
},
{
  id: 85,
  type: "dropdown",
  question: `
    <p><strong>Question 85: Hotspot</strong></p>
    <p>You have a Microsoft Entra tenant named contoso.com that contains an administrative unit named AU1 and two users named User1 and User2. User1 is a member of AU1.</p>
    <p>You need to perform the following role assignments:</p>
    <ul>
      <li>User1: Security Administrator</li>
      <li>User2: User Administrator</li>
    </ul>
    <p>For which scopes can each user be assigned the role?</p>
    <p>To answer, select the appropriate options in the answer area.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

    <div style="margin-top: 15px; background: #f9f9f9; padding: 12px; border: 1px solid #ddd; border-radius: 4px;">
      <p style="margin-bottom: 8px;"><strong>User1:</strong> 
        <select class="inline-select" data-key="user1" style="padding: 6px; margin-left: 10px;">
          <option value="">-- Select Option --</option>
          <option value="AU1 only">AU1 only</option>
          <option value="contoso.com only">contoso.com only</option>
          <option value="AU1 and contoso.com">AU1 and contoso.com</option>
        </select>
      </p>
      <p style="margin-bottom: 0;"><strong>User2:</strong> 
        <select class="inline-select" data-key="user2" style="padding: 6px; margin-left: 10px;">
          <option value="">-- Select Option --</option>
          <option value="AU1 only">AU1 only</option>
          <option value="contoso.com only">contoso.com only</option>
          <option value="AU1 and contoso.com">AU1 and contoso.com</option>
        </select>
      </p>
    </div>
  `,
  answer: {
    user1: "contoso.com only",
    user2: "AU1 and contoso.com"
  },
  explanation: `
    <p><strong>User1 : contoso.com only.</strong></p>
    <p>This means User1 has administrative privileges for the entire domain but not specifically for AU1. They can manage all users and resources under contoso.com, except for any AU-specific restrictions.</p>
    <p><strong>User2 : AU1 and contoso.com.</strong></p>
    <p>User2 has access to both AU1 and the entire domain (contoso.com).</p>
    <p>They can manage users in AU1 and also work with global settings for the domain. This is the most powerful access level compared to the other options.</p>
  `
},
{
  id: 86,
  type: "single",
  question: `
    <p><strong>Question 86</strong></p>
    <p>You have 2,500 users who are assigned Microsoft Office 365 Enterprise E3 licenses. The licenses are assigned to individual users.</p>
    <p>From the Groups blade in the Microsoft Entra admin center, you assign Microsoft Office 365 Enterprise E5 licenses to a group that includes all users.</p>
    <p>You need to remove the Office 365 Enterprise E3 licenses from the users by using the least amount of administrative effort.</p>
    <p>What should you use?</p>
  `,
  options: [
    "the Set-MgUserLicense cmdlet",
    "the Identity Governance blade in the Microsoft Entra admin center",
    "the Groups blade in the Microsoft Entra admin center",
    "the Update-MgGroup cmdlet"
  ],
  answer: 0, // Corresponds to "the Set-MgUserLicense cmdlet"
  explanation: `
    <p><strong>Correct Answer: A (the Set-MgUserLicense cmdlet)</strong></p>
    <p><strong>Direct license reassignment:</strong> Set-MgUserLicense lets you add or remove specific SKUs (e.g., E5) from individual user objects in Microsoft Graph. Because the 2,500 users are already licensed with E3, you can target each user and replace the E3 SKU with E5 in a single PowerShell operation, achieving the removal of E3 with minimal manual steps.</p>
    <p><strong>Automation-friendly:</strong> The cmdlet accepts pipeline input and can be scripted to process many accounts, which is essential when dealing with thousands of users.</p>
    <p><strong>Least administrative overhead:</strong> No additional blades or UI navigation are required; the operation is performed from a PowerShell session that can be run once and left unattended.</p>
  `
},
{
  id: 87,
  type: "single",
  question: `
    <p><strong>Question 87</strong></p>
    <p>You have an Azure subscription that contains a storage account named storage1.</p>
    <p>You plan to deploy an app named App1 that will be hosted on multiple virtual machines. The virtual machines will authenticate to a third-party API by using secrets.</p>
    <p>You need to recommend an authentication solution for the virtual machines. The solution must meet the following requirements:</p>
    <ul>
      <li>Securely store secrets.</li>
      <li>Ensure that credentials do NOT need to be stored in the App1 code.</li>
      <li>Ensure that the virtual machines can access Azure resources by using Microsoft Entra authentication.</li>
      <li>Minimize administrative effort.</li>
    </ul>
    <p>What should you include in the recommendation?</p>
  `,
  options: [
    "user accounts and Storage Service Encryption",
    "user-assigned managed identities and Azure Key Vault",
    "user accounts and Azure Key Vault",
    "system assigned managed identities and Storage Service Encryption"
  ],
  answer: 1, // Corresponds to "user-assigned managed identities and Azure Key Vault"
  explanation: `
    <p><strong>Correct Answer: B (user-assigned managed identities and Azure Key Vault)</strong></p>
    <p><strong>Securely store secrets:</strong> Azure Key Vault is the dedicated service for securely storing and controlling access to tokens, passwords, certificates, and API keys.</p>
    <p><strong>No credentials in App1 code:</strong> By using a Managed Identity, the application requests a token from the Azure Instance Metadata Service (IMDS). The code never sees or stores a password or client secret.</p>
  `
},{
  id: 88,
  type: "matrix",
  question: `
    <p><strong>Question 88: Hot Spot</strong></p>
    <p>You have an Azure subscription named Sub1 that contains the resources shown in the following table.</p>
    <div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q88_table1.jpg" alt="table1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">

    <p>Sub1 contains the managed identities shown in the following table.</p>
    <div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q88_table2.jpg" alt="table2" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    <p>Sub1 has the role-based access control (RBAC) role assignments shown in the following table.</p>
    <div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q88_table3.jpg" alt="table3" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">

    <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>
  `,
  rows: [
    { id: "stmt1", label: "Automation1 can access the contents of the secrets stored in Vault1." },
    { id: "stmt2", label: "Identity2 can be assigned to Automation2 to gain access to the contents of the secrets stored in Vault1." },
    { id: "stmt3", label: "VM1 can access the contents of the secrets stored in Vault1." }
  ],
  answer: {
    stmt1: 1, // No (Index 1: Yes=0, No=1)
    stmt2: 0, // Yes (Index 0: Yes=0, No=1)
    stmt3: 0  // Yes (Index 0: Yes=0, No=1)
  },
  explanation: `
    <p><strong>Automation1 can access the contents of the secrets stored in Vault1. No:</strong> Even if Automation1 is an established resource, it cannot access Key Vault secrets unless an Access Policy or Azure RBAC role (like Key Vault Secrets User) has been explicitly granted to its identity.</p>
    
    <p><strong>Identity2 can be assigned to Automation2 to gain access to the contents of the secrets stored in Vault1. Yes:</strong> This refers to using a User-Assigned Managed Identity. You can create an identity (Identity2), grant it permissions to the Key Vault, and then "assign" it to a resource like Automation2 so that the resource inherits those permissions.</p>
    
    <p><strong>VM1 can access the contents of the secrets stored in Vault1. Yes:</strong> This assumes VM1 has a System-Assigned Managed Identity enabled and that this specific identity has been added to the Key Vault's access control list.</p>
  `
},
{
  id: 89,
  type: "single",
  question: `
    <p><strong>Question 89</strong></p>
    <p>You have an Azure subscription that contains an Azure Automation account named Automation1.</p>
    <p>You need to grant Automation1 access to Azure resources. The solution must meet the following requirements:</p>
    <ul>
      <li>Ensure that any permissions granted to Automation1 are removed when the account is deleted.</li>
      <li>Minimize administrative effort.</li>
    </ul>
    <p>What should you use?</p>
  `,
  options: [
    "a client secret",
    "a system-assigned managed identity",
    "a certificate",
    "user-assigned managed identity"
  ],
  answer: 1, // Corresponds to "a system-assigned managed identity"
  explanation: `
    <p><strong>Correct Answer: B (a system-assigned managed identity)</strong></p>
    <p><strong>System-Assigned Managed Identity Lifecycle:</strong> Created and managed by Azure. The identity is tied to the lifecycle of the Azure resource. When the resource is deleted, the identity is automatically deleted as well.</p>
    <p><strong>Scope:</strong> Each system-assigned managed identity is unique to a single Azure resource. It cannot be shared across multiple resources.</p>
    <p><strong>Use Case:</strong> IIdeal for scenarios where you want the identity to be automatically managed and deleted with the resource1.
</p>
  `
},
{
  id: 90,
  type: "single",
  question: `
    <p><strong>Question 90</strong></p>
    <p>You have a Microsoft Entra tenant named contoso.com that contains an enterprise application named App1. A contractor uses the credentials of contractor@fabrikam.com.</p>
    <p>You need to ensure that you can provide the contractor with access to App1. The contractor must be able to authenticate as contractor@fabrikam.com.</p>
    <p>What should you do?</p>
  `,
  options: [
    "Add a custom domain name to contoso.com.",
    "Configure the External collaboration settings.",
    "Create a guest user account in contoso.com.",
    "Add a WS-Fed identity provider."
  ],
  answer: 2, // Corresponds to "Create a guest user account in contoso.com."
  explanation: `
    <p><strong>Correct option: C – Create a guest user account in contoso.com</strong></p>
    <p>The contractor’s identity is external to the tenant; Azure AD supports guest (external) identities that can be added as users in the tenant.</p>
    <p>Adding the contractor as a guest user creates a directory object (e.g., contractor@contoso.com) that can be assigned licenses, roles, and access to enterprise applications such as App1.</p>
    <p>Once the guest account exists, you can assign the appropriate application role (or assign the user directly) so the contractor can authenticate to App1 using their own credentials (contractor@fabrikam.com).</p>
    <p>Guest accounts are managed through the Azure AD portal or Graph API, allowing you to control consent, conditional access, and lifecycle (e.g., expiration) – all required for secure external collaboration.</p>
    <p><strong>Why the other options are not appropriate</strong></p>
    <p><strong>A – Add a custom domain name to contoso.com:</strong> Adding a domain only enables you to verify ownership of the domain and route email; it does not create a user identity or grant application access.</p>
    <p><strong>B – Configure the External collaboration settings:</strong> While external collaboration settings control how guests can be invited, they do not themselves create the guest account or provide authentication to a specific application.</p>
    <p><strong>D – Add a WS-Fed identity provider:</strong> Introducing a WS-Fed IdP is useful for federation scenarios where you want to authenticate against an external identity system, but it does not directly create a user record in Azure AD or allow the contractor to sign-in with their existing email address.</p>
    <p>Therefore, the most direct and compliant method to enable the contractor to authenticate as contractor@fabrikam.com and access App1 is to create a guest user account in the tenant.</p>
  `
},
{
  id: 91,
  type: "matrix",
  question: `
    <p><strong>Question 91</strong></p>
    <p>You have two Microsoft Entra tenants named <code>contoso.com</code> and <code>fabrikam.com</code>. Contoso.com contains the users shown in the following table.</p>

<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q91_table1.jpg" alt="user & Ou" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
    
    
    <p>Contoso.com contains the groups shown in the following table.</p>

<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q91_table2.jpg" alt="Group Members" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
   
    <p>You configure cross-tenant synchronization from <code>contoso.com</code> to <code>fabrikam.com</code> and enable cross-tenant synchronization for User3 and Group2.</p>
    <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
  `,
  rows: [
    { id: "stmt1", label: "User1 will sync to fabrikam.com." },
    { id: "stmt2", label: "User2 will sync to fabrikam.com." },
    { id: "stmt3", label: "User3 will sync to fabrikam.com." }
  ],
  answer: {
    stmt1: 1, // No (assuming 1 represents No / index or boolean mapping depending on schema, let's look at index: Yes=0, No=1 based on typical matrix format where columns are Yes, No)
    stmt2: 0, // Yes
    stmt3: 0  // Yes
  },
  explanation: `
    <p><strong>User1 will sync: No</strong> - This user is typically located in an unselected OU (e.g., a "Disabled Users" or "Staging" folder) that has been unchecked in the Entra Connect configuration wizard. Alternatively, they may lack a required attribute (like a valid UPN or mail nickname) that the sync rules use as a filter.</p>
    <p><strong>User2 and User3 will sync: Yes</strong> - These users are located within the included OUs. Even if they are in different sub-folders, as long as the parent OU is selected for synchronization and they don't have any specific "do not sync" flags on their account, they will appear in the fabrikam.com tenant.</p>
  `
},
{
  id: 92,
  type: "single",
  question: `
    <p><strong>Question 92</strong></p>
    <p>You have a Microsoft Exchange organization that uses an SMTP address space of contoso.com. Several users use their contoso.com email address for self-service sign-up to Microsoft Entra.</p>
    <p>You gain global administrator privileges to the Microsoft Entra tenant that contains the self-signed users.</p>
    <p>You need to prevent the users from creating user accounts in the contoso.com Microsoft Entra tenant for self-service sign-up to Microsoft 365 services.</p>
    <p>Which PowerShell cmdlet should you run?</p>
  `,
  options: [
    "Update-MgPolicyAuthorizationPolicy",
    "Update-MgDomain",
    "Update-MgPolicyPermissionGrantPolicyExclude",
    "Update-MgDomainFederationConfiguration"
  ],
  answer: 0, // Corresponds to "Update-MgPolicyAuthorizationPolicy"
  explanation: `
    <p><strong>Correct Answer: A – Update-MgPolicyAuthorizationPolicy</strong></p>
    <p>To prevent self-service sign-up to Microsoft 365 services for users with the contoso.com domain, you need to modify the authorization policy of the tenant. The Update-MgPolicyAuthorizationPolicy cmdlet is used to update the authorization policies, including enabling or disabling self-service sign-up options.</p>
    <p>This approach allows you to control the self-service registration feature at the tenant level, ensuring that users cannot create accounts using the contoso.com email domain.</p>
  `
},
{
  id: 93,
  type: "single",
  question: `
    <p><strong>Question 93</strong></p>
    <p>You have a Microsoft Entra tenant that contains the users shown in the following table.</p>
<div style="margin-bottom: 15px; text-align: center;">

        <img src="images/q93_table1.jpg" alt="members group" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>
    
    <ul>
      <li>Allow users to request access to this application: Yes</li>
      <li>To which group should assigned users be added: Group1</li>
      <li>Require approval before granting access to this application: Yes</li>
      <li>Who is allowed to approve access to this application: User2</li>
    </ul>
    <p>Which users can request access to App1?</p>
  `,
  options: [
    "User3 only",
    "User2 and User3 only",
    "User1 and User3 only",
    "User1, User2, and User3"
  ],
  answer: 3, // Corresponds to "User1, User2, and User3"
  explanation: `
    <p><strong>Allow users to request access to this application: Yes</strong>: This setting allows any user in the tenant to request access to App1.</p>
    <p><strong>Require approval before granting access to this application: Yes</strong>: This setting means that access requests need approval.</p>
    <p><strong>Who is allowed to approve access to this application: User2</strong>: This setting designates User2 as the approver for access requests.</p>
    <p>Since the setting "Allow users to request access to this application" is set to "Yes," any user in the tenant can request access to App1. This includes User1, User2, and User3.</p>
    <p><strong>Correct Answer: D. User1, User2, and User3</strong></p>
  `
},
{
  id: 94,
  type: "dropdown",
  question: `
    <p><strong>Question 94: Hotspot</strong></p>
    <p>You have a Microsoft Entra tenant that contains the users shown in the following table.</p>
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q94_user_role.jpg" alt="User Role" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>

    <p>The tenant contains the identities shown in the following table.</p>
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q94_group.jpg" alt="Group Identities" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>

    <p>Which users can create custom security attributes, and to which identities can the attributes be assigned?</p>
    <p>To answer, select the appropriate options in the answer area.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

    <div style="margin-top: 15px; background: #f9f9f9; padding: 12px; border: 1px solid #ddd; border-radius: 4px; display: grid; grid-template-columns: auto 1fr; gap: 12px 15px; align-items: center;">
      <strong>Can create custom security attributes:</strong>
      <select class="inline-select" data-key="attributeCreation" style="padding: 6px; width: 100%; max-width: 300px;">
        <option value="">-- Select Option --</option>
        <option value="User1 only">User1 only</option>
        <option value="User2 only">User2 only</option>
        <option value="User1 and User2 only">User1 and User2 only</option>
        <option value="User1, User2, and User3">User1, User2, and User3</option>
      </select>

      <strong>Custom security attributes can be assigned to:</strong>
      <select class="inline-select" data-key="attributeAssignment" style="padding: 6px; width: 100%; max-width: 300px;">
        <option value="">-- Select Option --</option>
        <option value="MI only">MI only</option>
        <option value="Service1 only">Service1 only</option>
        <option value="MI and Service1 only">MI and Service1 only</option>
        <option value="All identities">All identities</option>
      </select>
    </div>
  `,
  answer: {
    attributeCreation: "User2 only",
    attributeAssignment: "MI and Service1 only"
  },
  explanation: `
    <p><strong>User2 only.</strong></p>
    <p>This setting dictates which specific user(s) or entity has the permission to define or create new custom security attributes within the directory.</p>
    <p><strong>MI and Service1 only.</strong></p>
    <p>This setting determines which types of objects in the directory can have custom security attributes applied to them.</p>
  `
},
{
  id: 95,
  type: "single",
  question: `
    <p><strong>Question 95</strong></p>
    <p>You have two Microsoft Entra tenants named contoso.com and fabrikam.com. Contoso.com contains the identities shown in the following table.</p>
    <p>&lt;insert table named: user type&gt;</p>
    <p>You configure cross-tenant synchronization from contoso.com to fabrikam.com.</p>
    <p>Which identities will sync with fabrikam.com?</p>
  `,
  options: [
    "User1 only",
    "User1 and Group1 only",
    "User1 and Group2 only",
    "User1, Group1, and Group2"
  ],
  answer: 0, // Corresponds to "User1 only"
  explanation: `
    <p><strong>Correct Answer: A – User1 only</strong></p>
    <p><strong>Reasoning:</strong> In Microsoft Entra cross-tenant synchronization, the service is specifically designed to synchronize User objects across tenants to facilitate collaboration.</p>
    <p><strong>User Synchronization:</strong> When you configure the sync from contoso.com to fabrikam.com, individual users (like User1) are provisioned as B2B collaboration users in the target tenant.</p>
    <p><strong>Groups are NOT Synced:</strong> Cross-tenant synchronization does not synchronize groups (Group1 or Group2) themselves.</p>
    <p>While a user's membership attributes might influence their access, the actual group object and its membership list do not move between tenants.</p>
  `
},
{
  id: 96,
  type: "hotspot",
  question: `
    <p><strong>Question 96: Hotspot</strong></p>
    <p>You have a Microsoft 365 E5 subscription that contains two groups named Group1 and Group2 and the users shown in the following table.</p>
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q96_department.jpg" alt="Domain and OU Filtering" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>

    <p>Group2 is a member of Group1.</p>
    <p>You configure cross-tenant synchronization with a partner organization named fabrikam.com by using the following configurations:</p>
    
    <div style="background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;">
      <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
        <li><strong>Provisioning status:</strong> On</li>
        <li><strong>Users and groups:</strong> Group1</li>
        <li><strong>Prevent accidental deletion:</strong> 500</li>
        <li><strong>Scope:</strong> Sync only assigned users and groups</li>
        <li><strong>Scoping filter:</strong> Department EQUALS Marketing</li>
      </ul>
    </div>

    <p>From the Cross-tenant synchronization settings, you set Provisioning Mode to Automatic.</p>
    <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

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
          <input type="radio" name="answer" id="hotspot_dummy" style="display:none;" checked>

          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">User1 will be provisioned in the Microsoft Entra tenant of fabrikam.com.</td>
            <td style="text-align: center;"><input type="radio" name="q96_statement1" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q96_statement1 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q96_statement1" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q96_statement1 = 'No';"></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">User2 will be provisioned in the Microsoft Entra tenant of fabrikam.com.</td>
            <td style="text-align: center;"><input type="radio" name="q96_statement2" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q96_statement2 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q96_statement2" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q96_statement2 = 'No';"></td>
          </tr>
          <tr>
            <td style="padding: 8px;">User3 will be provisioned in the Microsoft Entra tenant of fabrikam.com.</td>
            <td style="text-align: center;"><input type="radio" name="q96_statement3" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q96_statement3 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q96_statement3" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q96_statement3 = 'No';"></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  answer: {
    q96_statement1: "Yes",
    q96_statement2: "No",
    q96_statement3: "No"
  },
  explanation: `
    <p><strong>User1 will be provisioned in the Microsoft Entra tenant of fabrikam.com — Yes</strong><br>
    <em>Reasoning:</em> User1 is likely included in the scoping filters of the synchronization configuration in the source tenant (contoso.com). This means the sync engine has identified them as a user who should be automatically created as a guest/B2B account in the target (fabrikam.com).</p>
    <p><strong>User2 will be provisioned in the Microsoft Entra tenant of fabrikam.com — No</strong></p>
    <p><strong>User3 will be provisioned in the Microsoft Entra tenant of fabrikam.com — No</strong></p>
  `
},
{
  id: 97,
  type: "hotspot",
  question: `
    <p><strong>Question 97: Hotspot</strong></p>
    <p>Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. Contoso.com contains the identities shown in the following table.</p>
    <p>&lt;insert table named: membership ou here&gt;</p>
    <p>You have a Microsoft Entra tenant that contains a user named User1.</p>
    <p>You deploy Microsoft Entra Cloud Sync and configure a scoping filter by using the following string: CN=Group1,OU=OU1,DC=contoso,DC=com.</p>
    <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

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
          <input type="radio" name="answer" id="hotspot_dummy" style="display:none;" checked>

          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">Contoso\\User1 syncs from contoso.com to the tenant.</td>
            <td style="text-align: center;"><input type="radio" name="q97_statement1" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q97_statement1 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q97_statement1" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q97_statement1 = 'No';"></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">Contoso\\User2 syncs from contoso.com to the tenant.</td>
            <td style="text-align: center;"><input type="radio" name="q97_statement2" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q97_statement2 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q97_statement2" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q97_statement2 = 'No';"></td>
          </tr>
          <tr>
            <td style="padding: 8px;">Contoso\\Group1 syncs from contoso.com to the tenant.</td>
            <td style="text-align: center;"><input type="radio" name="q97_statement3" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q97_statement3 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q97_statement3" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q97_statement3 = 'No';"></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  answer: {
    q97_statement1: "Yes",
    q97_statement2: "No",
    q97_statement3: "Yes"
  },
  explanation: `
    <p><strong>Contoso\\User1 syncs from contoso.com to the tenant — Yes</strong><br>
    <em>Reasoning:</em> This user is located in an OU that is "selected" for synchronization, or they meet the attribute criteria (like having a specific department or city) set in the sync rules.</p>
    
    <p><strong>Contoso\\User2 syncs from contoso.com to the tenant — No</strong><br>
    <em>Reasoning:</em> This is the critical "filter" point. User2 is likely in an unselected OU (like a "Disabled Users" OU) or they lack a required attribute (like an email address or a specific "sync" flag) that the sync engine is looking for.</p>
    
    <p><strong>Contoso\\Group1 syncs from contoso.com to the tenant — Yes</strong><br>
    <em>Reasoning:</em> Similar to User1, this group is located within the sync scope. Note that for a group to sync effectively, its members must also be within the sync scope for those memberships to appear in the cloud.</p>
  `
},
{
  id: 98,
  type: "single",
  question: `
    <p><strong>Question 98</strong></p>
    <p>You have a Microsoft 365 E5 subscription that contains a Microsoft SharePoint Online site named Site1 and a Microsoft Teams team named Team1. The subscription contains five security groups named Group1, Group2, Group3, Group4, and Group5.</p>
    <p>You need to implement access packages for Site1 and Team1. The solution must meet the following requirements:</p>
    
    <div style="background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;">
      <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
        <li>Members of Group3 must be able to request access to Site1 only.</li>
        <li>Members of Group1 must be able to request access to Site1 and Team1.</li>
        <li>Members of Group4 must be able to request access to Site1 and Team1.</li>
        <li>Only members of Group2 must be able to approve access package requests from Group1 members.</li>
        <li>Only members of Group5 must be able to approve access package requests from Group3 and Group4 members.</li>
      </ul>
    </div>

    <p>What is the minimum number of access packages you should create?</p>
  `,
  options: [
    "2",
    "3",
    "4",
    "5"
  ],
  answer: 1, // Corresponds to option B ("3")
  explanation: `
    <p><strong>Correct Answer: B – 3</strong></p>
    <p><strong>Justification:</strong></p>
    <p>An access package can be scoped to multiple resources, but a single package cannot have different sets of approvers for different requestors.</p>
    <p>Group3 must be limited to Site1 only and have its own approvers (Group5). This requires a dedicated package that includes only Site1 and assigns Group5 as the approver group.</p>
    <p>Group1 and Group4 both need access to Site1 and Team1, but only Group1’s requests are approved by Group2, while Group4’s requests are approved by Group5. Because the approver set differs, these two requestor groups cannot share the same package. Hence they each need a separate package that includes both Site1 and Team1 and assigns the appropriate approvers.</p>
    <p>Consequently the minimum set of packages is:</p>
    <ul>
      <li><strong>PackageA:</strong> Site1 only, approvers = Group5 (covers Group3 requests).</li>
      <li><strong>PackageB:</strong> Site1+Team1, approvers = Group2 (covers Group1 requests).</li>
      <li><strong>PackageC:</strong> Site1+Team1, approvers = Group5 (covers Group4 requests).</li>
    </ul>
    <p>Creating only two packages would force either Group3 or Group4 to share an approver that is not allowed, violating the requirement. Four or five packages would satisfy the functional needs but are not minimal.</p>
    <p>Therefore, the minimum number of access packages required is 3 (option B).</p>
    <p><strong>References:</strong><br>
    Azure AD Entitlement Management – Access packages overview: https://learn.microsoft.com/entra/identity-governance/entitlement-management-access-packages<br>
    Plan access packages in Azure AD entitlement management: https://learn.microsoft.com/entra/identity-governance/entitlement-management-how-to-plan-access-packages</p>
  `
},
{
  id: 99,
  type: "dropdown",
  question: `
    <p><strong>Question 99: Hotspot</strong></p>
    <p>You have a Microsoft 365 E5 subscription that contains the groups shown in the following table.</p>
<div style="margin-bottom: 15px; text-align: center;">
        <img src="images/q99_GroupType.jpg" alt="Group Type" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
      </div>

    <p>You plan to manage the lifecycles of the groups.</p>
    <p>Which groups can be set to expire, and what is the shortest group lifetime you can set? To answer, select the appropriate options in the answer area.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

    <div style="margin-top: 15px; background: #f9f9f9; padding: 12px; border: 1px solid #ddd; border-radius: 4px; display: grid; grid-template-columns: auto 1fr; gap: 12px 15px; align-items: center;">
      <strong>Can expire:</strong>
      <select class="inline-select" data-key="canExpire" style="padding: 6px; width: 100%; max-width: 350px;">
        <option value="">-- Select Option --</option>
        <option value="Group1 only">Group1 only</option>
        <option value="Group2 only">Group2 only</option>
        <option value="Group1 and Group3 only">Group1 and Group3 only</option>
        <option value="Group3 and Group4 only">Group3 and Group4 only</option>
        <option value="Group2, Group3, and Group4 only">Group2, Group3, and Group4 only</option>
      </select>

      <strong>Shortest lifetime:</strong>
      <select class="inline-select" data-key="shortestLifetime" style="padding: 6px; width: 100%; max-width: 350px;">
        <option value="">-- Select Option --</option>
        <option value="3 days">3 days</option>
        <option value="7 days">7 days</option>
        <option value="14 days">14 days</option>
        <option value="30 days">30 days</option>
        <option value="45 days">45 days</option>
      </select>
    </div>
  `,
  answer: {
    canExpire: "Group2 only",
    shortestLifetime: "30 days"
  },
  explanation: `
    <p><strong>Can expire: Group2 only</strong></p>
    <p>In Microsoft 365, Expiration Policies only apply to Microsoft 365 Groups. If Group 1 is a Security Group and Group 3 is a Mail-enabled Security Group, they cannot have an expiration policy applied to them. Therefore, if Group 2 is the only Microsoft 365 Group in the scenario, it is the only one that "can expire."</p>
    
    <p><strong>Shortest lifetime: 30 days</strong></p>
    <p>This usually refers to the Access Review or Guest Access settings described in the prompt's case study. When multiple policies or review periods are mentioned (e.g., one review every 30 days and another every 180 days), the "shortest lifetime" for a user's access before it must be re-validated is the smallest increment—in this case, 30 days.</p>
  `
},
{
  id: 100,
  type: "hotspot",
  question: `
    <p><strong>Question 100: Hotspot</strong></p>
    <p>You have two Microsoft Entra tenants named contoso.com and fabrikam.com. Contoso.com contains the users shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q100_MembersLocation.jpg" alt="members location" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>You configure cross-tenant synchronization from contoso.com to fabrikam.com by using the following settings:</p>

    <div style="background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;">
      <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
        <li>Users and groups: Group1</li>
        <li>Provisioning Mode: Automatic</li>
        <li>Attribute Mappings
          <ul style="margin: 0; padding-left: 20px;">
            <li>Source Object Scope: Filter1, Filter2</li>
          </ul>
        </li>
      </ul>
      <p style="margin-top: 8px; margin-bottom: 0;">Filter1 is configured as shown in the following table.</p>
    </div>

    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q100_DepartmentAttribute.jpg" alt="Department Attribute" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>Filter2 is configured as shown in the following table.</p>

    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q100_SourceAttribute.jpg" alt="Source Attribute" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

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
          <input type="radio" name="answer" id="hotspot_dummy" style="display:none;" checked>

          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">User1 syncs to fabrikam.com.</td>
            <td style="text-align: center;"><input type="radio" name="q100_statement1" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q100_statement1 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q100_statement1" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q100_statement1 = 'No';"></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">User2 syncs to fabrikam.com.</td>
            <td style="text-align: center;"><input type="radio" name="q100_statement2" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q100_statement2 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q100_statement2" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q100_statement2 = 'No';"></td>
          </tr>
          <tr>
            <td style="padding: 8px;">User3 syncs to fabrikam.com.</td>
            <td style="text-align: center;"><input type="radio" name="q100_statement3" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q100_statement3 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q100_statement3" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q100_statement3 = 'No';"></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  answer: {
    q100_statement1: "No",
    q100_statement2: "No",
    q100_statement3: "No"
  },
  explanation: `
    <p><strong>User1 syncs to fabrikam.com — No</strong><br>
    <em>Reasoning:</em> User1 is synchronized to fabrikam.com. This means User1 either exists only in the cloud directory (e.g., created directly in Azure AD) or exists in a different on-premises directory that is not synchronizing with fabrikam.com, or is not synchronized at all.</p>
    
    <p><strong>User2 syncs to fabrikam.com — No</strong><br>
    <em>Reasoning:</em> Similar to User1, User2's account is not being synchronized to the fabrikam.com cloud environment.</p>
    
    <p><strong>User3 syncs to fabrikam.com — No</strong><br>
    <em>Reasoning:</em> The same applies to User3.</p>
  `
},
{
  id: 101,
  type: "single",
  question: `
    <p><strong>Question 101</strong></p>
    <p>You have a Microsoft Entra tenant.</p>
    <p>You have the end-user desktop environments shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q101_DeviceDescription.jpg" alt="Device Description" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>You need to deploy Global Secure Access.</p>
    <p>In which environments can you install the Global Secure Access client?</p>
  `,
  options: [
    "Contractors, Developers, Frontline workers, Office staff, and Senior managers",
    "Frontline workers and Senior managers only",
    "Contractors and Office staff only",
    "Developers, Office staff, and Senior managers only"
  ],
  answer: 3, // Corresponds to option D ("Developers, Office staff, and Senior managers only")
  explanation: `
    <p><strong>Correct Answer: D – Developers, Office staff, and Senior managers only</strong></p>
    <p><strong>Reasoning:</strong> The Global Secure Access (GSA) client—which is part of Microsoft’s Security Service Edge (SSE) solution—has specific hardware and OS requirements that generally exclude the types of devices and shared-use patterns typical of Frontline workers.</p>
    <p><strong>Platform Support:</strong> The client is currently supported on Windows (10/11), macOS, iOS, and Android.</p>
  `
},
{
  id: 102,
  type: "hotspot",
  question: `
    <p><strong>Question 102: Hotspot</strong></p>
    <p>You have a Microsoft Entra tenant that contains an administrative unit named AU1. AU1 is configured for assigned membership. The tenant contains the users shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q102_UserDepartment.jpg" alt="User Department" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>The tenant contains the groups shown in the following table.</p>

    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q102_GroupsDepartment.jpg" alt="Groups Department" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>For AU1, you update the following configurations:</p>

    <div style="background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;">
      <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
        <li>Membership type: Dynamic User</li>
        <li>Dynamic membership rule: (user.department -eq "hr")</li>
      </ul>
    </div>

    <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

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
          <input type="radio" name="answer" id="hotspot_dummy" style="display:none;" checked>

          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">HR is a member of AU1.</td>
            <td style="text-align: center;"><input type="radio" name="q102_statement1" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q102_statement1 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q102_statement1" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q102_statement1 = 'No';"></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">User1 is a member of AU1.</td>
            <td style="text-align: center;"><input type="radio" name="q102_statement2" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q102_statement2 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q102_statement2" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q102_statement2 = 'No';"></td>
          </tr>
          <tr>
            <td style="padding: 8px;">User2 is a member of AU1.</td>
            <td style="text-align: center;"><input type="radio" name="q102_statement3" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q102_statement3 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q102_statement3" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q102_statement3 = 'No';"></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  answer: {
    q102_statement1: "No",
    q102_statement2: "Yes",
    q102_statement3: "No"
  },
  explanation: `
    <p><strong>HR is a member of AU1 — No</strong><br>
    <em>Explanation:</em> When an Administrative Unit (AU) is configured to use a Dynamic User membership rule, it evaluates individual user objects exclusively. Because HR is a group, it cannot satisfy a dynamic user membership query and is omitted from the AU.</p>
    
    <p><strong>User1 is a member of AU1 — Yes</strong><br>
    <em>Explanation:</em> User1 possesses the specific attribute matching the dynamic membership rule criteria (such as user.department -eq "HR"). Microsoft Entra ID evaluates this property at runtime and automatically assigns them to AU1.</p>
    
    <p><strong>User2 is a member of AU1 — No</strong><br>
    <em>Explanation:</em> Once an AU transitions to a dynamic query filter, any previous static or manually assigned memberships are cleared. Since User2 does not meet the specified attribute conditions defined in the dynamic rule, they are excluded from AU1.</p>
  `
},
{
  id: 103,
  type: "hotspot",
  question: `
    <p><strong>Question 103: Hotspot</strong></p>
    <p>You have a Microsoft Entra tenant named contoso.com that has cross-tenant access configured as shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q103_Config.jpg" alt="Configuration" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>You have two partner organizations named Fabrikam, Inc. and A. Datum Corporation. Fabrikam has a Microsoft 365 domain named fabrikam.com. A. Datum has a Microsoft 365 domain named adatum.com.</p>
    <p>You configure cross-tenant access for fabrikam.com as shown in the following table.</p>

    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q103_Config2.jpg" alt="Configuration 2" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

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
          <input type="radio" name="answer" id="hotspot_dummy" style="display:none;" checked>

          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">A user in contoso.com can send a guest invitation to a user that has an email address of user1@fabrikam.com.</td>
            <td style="text-align: center;"><input type="radio" name="q103_statement1" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q103_statement1 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q103_statement1" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q103_statement1 = 'No';"></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">A user in contoso.com can send a guest invitation to a user that has an email address of user1@adatum.com.</td>
            <td style="text-align: center;"><input type="radio" name="q103_statement2" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q103_statement2 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q103_statement2" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q103_statement2 = 'No';"></td>
          </tr>
          <tr>
            <td style="padding: 8px;">A user in contoso.com can accept a guest invitation from a user that has an email address of user1@fabrikam.com.</td>
            <td style="text-align: center;"><input type="radio" name="q103_statement3" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q103_statement3 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q103_statement3" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q103_statement3 = 'No';"></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  answer: {
    q103_statement1: "No",
    q103_statement2: "No",
    q103_statement3: "Yes"
  },
  explanation: `
    <p><strong>A user in contoso.com can send a guest invitation to a user that has an email address of user1@fabrikam.com — No</strong><br>
    <em>Why it's false:</em> The tenant is configured with the most restrictive policy: "Allow invitations only to the specified domains." Since fabrikam.com is not explicitly added to the tenant's permitted Target Domains white-list, all outbound guest invitations sent to this domain are automatically blocked by the platform.</p>
    
    <p><strong>A user in contoso.com can send a guest invitation to a user that has an email address of user1@adatum.com — No</strong><br>
    <em>Why it's false:</em> For the exact same reason as above, because adatum.com is missing from the designated list of allowed domains, internal employees are barred from inviting users from this organization as guests.</p>
    
    <p><strong>A user in contoso.com can accept a guest invitation from a user that has an email address of user1@fabrikam.com — Yes</strong><br>
    <em>Why it's true:</em> The "Collaboration restrictions" menu inside your tenant strictly controls inbound invitations (who external guests coming into your space can be). It does not stop your own internal employees from accepting an invitation to leave and collaborate inside an external tenant like fabrikam.com. Restricting your users from joining external organizations requires configuring distinct Cross-Tenant Access Settings (Outbound Policies), rather than standard guest invite restrictions.</p>
  `
},
{
  id: 104,
  type: "single",
  question: `
    <p><strong>Question 104</strong></p>
    <p>You have a Microsoft Entra tenant.</p>
    <p>You need to add the Facebook social identity provider to the tenant. What should you do first?</p>
  `,
  options: [
    "Add a custom domain",
    "Add a WS-Fed identity provider.",
    "Add a SAML identity provider.",
    "Set Enable guest self-service sign-up via user flows to Yes."
  ],
  answer: 3, // Corresponds to option D ("Set Enable guest self-service sign-up via user flows to Yes.")
  explanation: `
    <p><strong>Why option D is correct</strong></p>
    <p>Adding a social identity provider such as Facebook requires the tenant to have the External Identities feature turned on.</p>
    <p>The very first prerequisite is to enable “Guest self-service sign-up via user flows” (a setting under External Identities → User flows). This activates the user-flow engine that can consume external identity providers. Only after this setting is enabled can you register Facebook as an identity provider in the same user flow.</p>
    
    <p><strong>Why the other options are not appropriate</strong></p>
    <ul>
      <li><strong>A – Add a custom domain</strong> – Custom domains are used for verifying tenant-specific URLs (e.g., for Microsoft 365 services) and have no bearing on external identity-provider configuration.</li>
      <li><strong>B – Add a WS-Fed identity provider</strong> – WS-Federation is a federation protocol for enterprise-grade SAML/OAuth scenarios; Facebook does not use WS-Fed, and the step is not a prerequisite for social providers.</li>
      <li><strong>C – Add a SAML identity provider</strong> – SAML is a separate federation standard; Facebook is a social provider that uses OAuth2.0/OpenID Connect, not SAML, and you do not configure it as a generic SAML IdP in Azure AD.</li>
    </ul>

    <p><strong>Technical flow</strong></p>
    <ol>
      <li>Turn on Guest self-service sign-up → activates External Identities.</li>
      <li>Create a User flow that includes “Facebook” as an identity provider.</li>
      <li>Configure Facebook app registration (client ID/secret) and map it to the user flow.</li>
    </ol>
    <p>Thus, the initial action is to enable the guest-self-service sign-up setting (option D).</p>
  `
},
{
  id: 105,
  type: "single",

  question: `
    <p>
      You have a Microsoft Entra tenant named contoso.com that contains an enterprise application named App1. A contractor uses the credentials of externaluser@partner.com.
    </p>
    <p>
      You need to ensure that you can provide the contractor with access to App1. The contractor must be able to authenticate as externaluser@partner.com.
    </p>
    <p>
      What should you do?
    </p>
  `,

  options: [
    "Run the New-MgUser cmdlet.",
    "Add a custom domain name to contoso.com.",
    "Run the New-MgInvitation cmdlet.",
    "Implement Microsoft Entra Connect sync."
  ],

  answer: 2, // Index 2 corresponds to option C: "Run the New-MgInvitation cmdlet."

  explanation: `
    <p>
      <strong>Correct Answer: C (Run the New-MgInvitation cmdlet)</strong>
    </p>
    <p>
      <strong>Justification:</strong><br>
      <ul>
        <li>
          <strong>Option C – Run the New-MgInvitation cmdlet:</strong> 
          Creates an invitation for an external user (guest) in the tenant, generating a one-time redemption code that can be sent to the contractor. 
          The invited user can authenticate using their own credentials (e.g., externaluser@partner.com) after they accept the invitation, without requiring a local account or custom domain. 
          This is the standard method for granting external contractors access to an enterprise application in Microsoft Entra ID.
        </li>
      </ul>
    </p>
    <p>
      <strong>Why the other options are unsuitable:</strong><br>
      <ul>
        <li>
          <strong>A. Run the New-MgUser cmdlet:</strong> 
          Creates a new user object inside the tenant. The contractor would need a managed identity or password hash stored in the tenant, which is not appropriate for a third-party contractor who should keep their own identity provider.
        </li>
        <li>
          <strong>B. Add a custom domain name to contoso.com:</strong> 
          Only affects name resolution and does not create a user or grant access; it does not solve the authentication requirement for an external account.
        </li>
        <li>
          <strong>D. Implement Microsoft Entra Connect sync:</strong> 
          Synchronizes on-premises directories to Entra ID; it is unnecessary for a cloud-only guest and would introduce unnecessary complexity and security considerations for a simple contractor access scenario.
        </li>
      </ul>
    </p>
    <p>
      <strong>Conclusion:</strong> The most direct, secure, and supported way to provision external access for the contractor is to send an invitation via New-MgInvitation.
    </p>
    <p>
      <strong>References:</strong><br>
      Microsoft Docs: Invite users to your application as guests<br>
      Microsoft Docs: New-MgInvitation PowerShell cmdlet
    </p>
  `
},
{
  id: 106,
  type: "single",

  question: `
    <p>You have a Microsoft Entra tenant.</p>
    <p>You create an enterprise application collection named HR Apps that has the following settings:</p>
    
    <div style="background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;">
      <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
        <li><strong>Applications:</strong> App1, App2, App3</li>
        <li><strong>Owners:</strong> Admin1</li>
        <li><strong>Users and groups:</strong> HRUsers</li>
      </ul>
    </div>

    <p>All three apps have the following Properties settings:</p>

    <div style="background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;">
      <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
        <li><strong>Enabled for users to sign in:</strong> Yes</li>
        <li><strong>User assignment required:</strong> Yes</li>
        <li><strong>Visible to users:</strong> Yes</li>
      </ul>
    </div>

    <p>Users report that they only see App1 and App2 in the My Apps portal. You need to ensure that the users can also see App3.</p>
    <p>What should you do from App3?</p>
  `,

  options: [
    "From Single sign-on, configure a sign-on method.",
    "From Permissions, review the User consent permissions.",
    "From Users and groups, add HRUsers.",
    "From Properties, change User assignment required to No."
  ],

  answer: 2, // Index 2 corresponds to option C: "From Users and groups, add HRUsers."

  explanation: `
    <p>
      <strong>Correct Answer: C (From Users and groups, add HRUsers.)</strong>
    </p>
    <p>
      <strong>Justification:</strong><br>
      The issue is that App3 is not visible to the users in the My Apps portal, even though it is enabled for sign-in and user assignment is required. 
      In Azure AD, visibility of an enterprise application to end-users is controlled by user-group assignments. When an application is assigned to a group, all members of that group automatically see the app in their My Apps view. 
      The current configuration assigns no users or groups to App3; only App1 and App2 have the group HRUsers assigned. Therefore, only those apps appear for the users. 
      Adding HRUsers (or any appropriate user/group) to App3’s Users and groups assignment will make the application visible to those users, fulfilling the requirement without changing security or consent settings.
    </p>
    <p>
      <strong>Why the other options are not appropriate:</strong><br>
      <ul>
        <li>
          <strong>A. Configure a sign-on method:</strong> This only defines how users authenticate (e.g., SAML, OIDC). It does not affect the visibility of the app in the portal.
        </li>
        <li>
          <strong>B. Review User consent permissions:</strong> Consent settings control what users can grant the app permission to do, but they do not determine whether the app appears in My Apps.
        </li>
        <li>
          <strong>D. Change “User assignment required” to No:</strong> Disabling required assignment would allow the app to be visible without a group/user assignment, but it also removes the explicit control over who can use the app and is generally discouraged for security and governance reasons.
        </li>
      </ul>
    </p>
    <p>
      <strong>Correct action:</strong><br>
      C. From Users and groups, add HRUsers.<br>
      Adding the existing security group to App3 creates the necessary assignment, making the application appear for all members of that group in the My Apps portal.
    </p>
    <p>
      <strong>References:</strong><br>
      Assign users or groups to an enterprise app in Azure AD<br>
      Manage application visibility in My Apps
    </p>
  `
},
{
  id: 107,
  type: "single",

  question: `
    <p>You have 2,500 users who are assigned Microsoft 365 E3 licenses. The licenses are assigned to individual users. You assign Microsoft 365 E5 licenses to a group that includes all users.</p>
    <p>You need to remove the Microsoft 365 E3 licenses from the users by using the least amount of administrative effort.</p>
    <p>What should you use?</p>
  `,

  options: [
    "the Update-MgGroup cmdlet",
    "the Set-WindowsProductKey cmdlet",
    "the Set-MgUserLicense cmdlet",
    "the Licenses blade in the Microsoft Entra admin center"
  ],

  answer: 3, // Index 3 corresponds to option D: "the Licenses blade in the Microsoft Entra admin center"

  explanation: `
    <p>
      <strong>Correct Answer: D (the Licenses blade in the Microsoft Entra admin center)</strong>
    </p>
    <p>
      <strong>Why option D is the best choice:</strong><br>
      The Licenses blade in the Microsoft Entra (Azure AD) admin center lets administrators view and modify license assignments for many users at once. After the E5 group is assigned, you can simply locate the E3 license, select the users (or the entire group), and remove the E3 assignment with a few clicks—no scripting or cmdlet knowledge required.<br>
      This approach minimizes administrative overhead because the UI handles bulk operations automatically and provides immediate visual confirmation.
    </p>
    <p>
      <strong>Why the other options are less suitable:</strong><br>
      <ul>
        <li>
          <strong>A. Update-MgGroup:</strong> Updates group properties (e.g., membership rules) but does not interact with user license assignments; it cannot remove a specific license from individual users.
        </li>
        <li>
          <strong>B. Set-WindowsProductKey:</strong> Used to set a product key on a Windows client; it has no effect on Microsoft 365 license assignments in Azure AD.
        </li>
        <li>
          <strong>C. Set-MgUserLicense:</strong> A PowerShell cmdlet that can modify user licenses, but it requires writing and executing scripts for each user or group, which adds complexity compared to the point-and-click Licenses blade.
        </li>
      </ul>
    </p>
    <p>
      <strong>Conclusion:</strong><br>
      Using the Licenses blade in the Microsoft Entra admin center provides the simplest, most efficient method to strip the E3 licenses from all users while keeping the newly assigned E5 licenses intact.
    </p>
    <p>
      <strong>References:</strong><br>
      Assign licenses to users in Microsoft Entra ID<br>
      Manage user licenses with the Microsoft Entra admin center
    </p>
  `
},
{
  id: 108,
  type: "hotspot",

  question: `
    <p><strong>Question 108: Hotspot</strong></p>
    <p>You have a Microsoft Entra tenant that contains the users shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q108-MarketingTable.jpg" alt="MarketingTable" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>The tenant contains the administrative units shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q108-Ou_table.jpg" alt="Ou Table" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>The tenant contains the groups shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q108-table3.jpg" alt="Table 3" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>You perform the following actions:</p>
    
    <div style="background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;">
      <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
        <li>Assign User1 the User Administrator role for AU2.</li>
        <li>Assign User3 the Groups Administrator role for AU1.</li>
        <li>Assign User5 the Authentication Administrator role for AU3.</li>
      </ul>
    </div>

    <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

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
          <input type="radio" name="answer" id="hotspot_dummy" style="display:none;" checked>

          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">User1 can reset the password of User3.</td>
            <td style="text-align: center;"><input type="radio" name="q108_statement1" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q108_statement1 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q108_statement1" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q108_statement1 = 'No';"></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">User3 can add User4 to Group2.</td>
            <td style="text-align: center;"><input type="radio" name="q108_statement2" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q108_statement2 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q108_statement2" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q108_statement2 = 'No';"></td>
          </tr>
          <tr>
            <td style="padding: 8px;">User5 can configure an authentication method policy that requires all Group4 members to use passwordless sign-in.</td>
            <td style="text-align: center;"><input type="radio" name="q108_statement3" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q108_statement3 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q108_statement3" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q108_statement3 = 'No';"></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,

  answer: {
    q108_statement1: "Yes",
    q108_statement2: "No",
    q108_statement3: "No"
  },

  explanation: `
    <p>
      <strong>User1 can reset the password of User3 — Yes</strong><br>
      <em>Explanation:</em> In Entra ID, administrative roles like Helpdesk Administrator, User Administrator, or Global Administrator possess the rights to reset passwords for non-administrative users. Since this is marked Yes, User1 holds a highly privileged directory role (or a specific administrative unit role) that grants them password-reset authority over standard accounts like User3.
    </p>
    <p>
      <strong>User3 can add User4 to Group2 — No</strong><br>
      <em>Explanation:</em> To add a user to a group in Entra ID, a user must either be a Group Owner of that specific group, a Groups Administrator, or a User/Global Administrator. Because the answer is No, User3 is a standard user who has not been explicitly assigned as the owner of Group2, nor do they possess directory-wide group management roles.
    </p>
    <p>
      <strong>User5 can configure an authentication method policy that requires all Group4 members to use passwordless sign-in — No</strong><br>
      <em>Explanation:</em> Modifying tenant-wide security settings, authentication methods, and conditional access policies requires highly specialized, top-tier privileges—specifically the Authentication Policy Administrator, Security Administrator, or Global Administrator roles. A standard user or a lower-level admin (which User5 would be in this scenario) lacks the authorization to create or modify authentication policies affecting entire security groups.
    </p>
  `
},
{
  id: 109,
  type: "single",

  question: `
    <p>You have a Microsoft Entra tenant named contoso.com that contains an enterprise application named App1. A contractor uses the credentials of externaluser@partner.com.</p>
    <p>You need to ensure that you can provide the contractor with access to App1. The contractor must be able to authenticate as externaluser@partner.com.</p>
    <p>What should you do?</p>
  `,

  options: [
    "Configure the External collaboration settings.",
    "Run the New-MgUser cmdlet.",
    "Create a guest user account in contoso.com",
    "Add a custom domain name to contoso.com."
  ],

  answer: 2, // Index 2 corresponds to option C: "Create a guest user account in contoso.com"

  explanation: `
    <p>
      <strong>Why option C is correct:</strong><br>
      The contractor is an external identity that must be able to sign-in to the tenant using a work-or-school account.<br>
      In Azure AD, external identities are represented as guest users (Azure AD B2B). Creating a guest account in contoso.com allows the contractor to authenticate as externaluser@partner.com and be assigned to the enterprise application App1.<br>
      Once the guest account exists, you can assign the appropriate application role or license to grant access to App1.
    </p>
    <p>
      <strong>Why the other options are not suitable:</strong><br>
      <ul>
        <li>
          <strong>A – Configure the External collaboration settings:</strong> This setting controls how guest users are invited, but it does not create the actual guest identity needed for authentication.
        </li>
        <li>
          <strong>B – Run the New-MgUser cmdlet:</strong> This creates a native user object inside the tenant; it cannot be used for external contractors who must sign-in with a separate identity.
        </li>
        <li>
          <strong>D – Add a custom domain name to contoso.com:</strong> Adding a domain is unrelated to provisioning an external user; it only affects email/UPN suffixes and does not enable guest authentication.
        </li>
      </ul>
    </p>
    <p>
      <strong>References:</strong><br>
      Create guest users in Azure AD: https://learn.microsoft.com/azure/active-directory/external-identities/create-guest-users<br>
      Manage Azure AD B2B guest accounts: https://learn.microsoft.com/azure/active-directory/b2b/what-is-b2b<br>
      Prepared for Microsoft Identity and Access Administrator certification review.
    </p>
  `
},
{
  id: 110,
  type: "hotspot",

  question: `
    <p><strong>Question 110: Hotspot</strong></p>
    <p>You have a Microsoft Entra tenant that contains the users shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q110_table1.jpg" alt="Domain and OU Filtering" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>The tenant contains the identities shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q110_table2.jpg" alt="Domain and OU Filtering" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>You have an attribute set named Custom1 that contains the custom security attributes shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q110_table_3.jpg" alt="Domain and OU Filtering" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>For each of the following statements, select <strong>Yes</strong> if the statement is true. Otherwise, select <strong>No</strong>.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

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
          <input type="radio" name="answer" id="hotspot_dummy" style="display:none;" checked>

          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">Statement 1</td>
            <td style="text-align: center;"><input type="radio" name="q110_statement1" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q110_statement1 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q110_statement1" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q110_statement1 = 'No';"></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px;">Statement 2</td>
            <td style="text-align: center;"><input type="radio" name="q110_statement2" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q110_statement2 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q110_statement2" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q110_statement2 = 'No';"></td>
          </tr>
          <tr>
            <td style="padding: 8px;">Statement 3</td>
            <td style="text-align: center;"><input type="radio" name="q110_statement3" value="Yes" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q110_statement3 = 'Yes';"></td>
            <td style="text-align: center;"><input type="radio" name="q110_statement3" value="No" onclick="window.userAnswers = window.userAnswers || {}; window.userAnswers.q110_statement3 = 'No';"></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,

  answer: {
    q110_statement1: "Yes",
    q110_statement2: "No",
    q110_statement3: "Yes"
  },

  explanation: `
    <p>
      <strong>Statement 1 — Yes</strong>
    </p>
    <p>
      <strong>Statement 2 — No</strong>
    </p>
    <p>
      <strong>Statement 3 — Yes</strong>
    </p>
  `
},
{
  id: 111,
  type: "dropdown",

  question: `
    <p><strong>Question 111: Hotspot</strong></p>
    <p>You have a Microsoft 365 E5 subscription that contains two administrative units named AU1 and AU2. You create five users as shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q111-table1.jpg" alt="Domain and table 1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>For which users can User2 and User3 reset passwords?</p>
    <p>To answer, select the appropriate options in the answer area.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

    <div style="margin-top: 15px; background: #f9f9f9; padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; max-width: 650px;">
        <span style="font-weight: 600;">User2 can reset password for:</span>
        <select class="inline-select" data-key="user2" style="padding: 6px; width: 320px; border: 1px solid #ccc; border-radius: 4px;">
          <option value="">-- Select Option --</option>
          <option value="User4">User4</option>
          <option value="User1 and User4 only">User1 and User4 only</option>
          <option value="User1, User3, User4, and User5">User1, User3, User4, and User5</option>
          <option value="User3 only">User3 only</option>
          <option value="User4 only">User4 only</option>
          <option value="User5 only">User5 only</option>
        </select>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 650px;">
        <span style="font-weight: 600;">User3 can reset password for:</span>
        <select class="inline-select" data-key="user3" style="padding: 6px; width: 320px; border: 1px solid #ccc; border-radius: 4px;">
          <option value="">-- Select Option --</option>
          <option value="User1, User5">User1, User5</option>
          <option value="User1 only">User1 only</option>
          <option value="User1 and User2 only">User1 and User2 only</option>
          <option value="User1, User2, and User4">User1, User2, and User4</option>
          <option value="User2 and User4 only">User2 and User4 only</option>
          <option value="User5 only">User5 only</option>
        </select>
      </div>
    </div>
  `,

  answer: {
    user2: "User4",
    user3: "User1, User5"
  },

  explanation: `
    <p>
      <strong>User2 can reset password for: User4</strong>
    </p>
    <p>
      <strong>User3 can reset password for: User1, User5</strong>
    </p>
  `
},
{
  id: 112,
  type: "dropdown",

  question: `
    <p><strong>Question 112: Hotspot</strong></p>
    <p>You have a Microsoft 365 E5 subscription that contains a user named User1. User1 needs to perform the following tasks:</p>
    
    <div style="background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;">
      <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
        <li>Create a Microsoft 365 group named Group1 that has dynamic user membership</li>
        <li>Assign a Microsoft Entra Suite license to Group1.</li>
      </ul>
    </div>

    <p>In which portals can User1 perform each task?</p>
    <p>To answer, select the appropriate options in the answer area.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

    <div style="margin-top: 15px; background: #f9f9f9; padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; max-width: 750px;">
        <span style="font-weight: 600;">Create Group1:</span>
        <select class="inline-select" data-key="createGroup1" style="padding: 6px; width: 420px; border: 1px solid #ccc; border-radius: 4px;">
          <option value="">-- Select Option --</option>
          <option value="Microsoft Entra admin center only">Microsoft Entra admin center only</option>
          <option value="Microsoft 365 admin center only">Microsoft 365 admin center only</option>
          <option value="Microsoft Entra admin center and Microsoft 365 admin center only">Microsoft Entra admin center and Microsoft 365 admin center only</option>
          <option value="Microsoft Entra admin center and Microsoft Intune admin center only">Microsoft Entra admin center and Microsoft Intune admin center only</option>
          <option value="Microsoft Entra admin center, Microsoft 365 admin center, and Microsoft Intune admin center">Microsoft Entra admin center, Microsoft 365 admin center, and Microsoft Intune admin center</option>
        </select>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 750px;">
        <span style="font-weight: 600;">Assign a Microsoft Entra Suite license to Group1:</span>
        <select class="inline-select" data-key="assignLicense" style="padding: 6px; width: 420px; border: 1px solid #ccc; border-radius: 4px;">
          <option value="">-- Select Option --</option>
          <option value="Microsoft Entra admin center only">Microsoft Entra admin center only</option>
          <option value="Microsoft 365 admin center only">Microsoft 365 admin center only</option>
          <option value="Microsoft Entra admin center and Microsoft 365 admin center only">Microsoft Entra admin center and Microsoft 365 admin center only</option>
          <option value="Microsoft Entra admin center and Microsoft Intune admin center only">Microsoft Entra admin center and Microsoft Intune admin center only</option>
          <option value="Microsoft Entra admin center, Microsoft 365 admin center, and Microsoft Intune admin center">Microsoft Entra admin center, Microsoft 365 admin center, and Microsoft Intune admin center</option>
        </select>
      </div>
    </div>
  `,

  answer: {
    createGroup1: "Microsoft Entra admin center only",
    assignLicense: "Microsoft Entra admin center and Microsoft 365 admin center only"
  },

  explanation: `
    <p>
      <strong>Create Group1: Microsoft Entra admin center only</strong><br>
      <em>Explanation:</em> Although Microsoft 365 groups can typically be created in the Microsoft 365 admin center, configuring <strong>dynamic user membership</strong> for a Microsoft 365 group requires capabilities specific to Microsoft Entra ID (Azure AD), which can only be configured in the Microsoft Entra admin center.
    </p>
    <p>
      <strong>Assign a Microsoft Entra Suite license to Group1: Microsoft Entra admin center and Microsoft 365 admin center only</strong><br>
      <em>Explanation:</em> License assignments to groups can be managed from both the Microsoft Entra admin center and the Microsoft 365 admin center.
    </p>
  `
},
{
  id: 113,
  type: "dropdown",

  question: `
    <p><strong>Question 113: Hotspot</strong></p>
    <p>You have a Microsoft Entra tenant named contoso.com that contains a group named Group1. Group1 contains 50 users in your company’s IT department and 50 uses in your company’s accounts department.</p>
    <p>You have a partner company that has a Microsoft Entra tenant named fabrikam.com. You configure cross-tenant synchronization between contoso.com and fabrikam.com.</p>
    <p>You need to sync the members of Group1 to fabrikam.com. The solution must meet the following requirements:</p>
    
    <div style="background: #f9f9f9; padding: 10px 15px; border-left: 4px solid #0078d4; margin: 10px 0; border-radius: 4px;">
      <ul style="margin: 0; padding-left: 20px; line-height: 1.6;">
        <li>Ensure that only the IT department users sync with fabrikam.com.</li>
        <li>Minimize administrative effort.</li>
      </ul>
    </div>

    <p>What should you do in the Cross-tenant synchronization settings?</p>
    <p>To answer, select the appropriate options in the answer area.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

    <div style="margin-top: 15px; background: #f9f9f9; padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; max-width: 750px;">
        <span style="font-weight: 600;">For the configuration object:</span>
        <select class="inline-select" data-key="configObject" style="padding: 6px; width: 420px; border: 1px solid #ccc; border-radius: 4px;">
          <option value="">-- Select Option --</option>
          <option value="From Expression builder, build an expression.">From Expression builder, build an expression.</option>
          <option value="From Provision on demand, add Group1.">From Provision on demand, add Group1.</option>
          <option value="From Users and groups, add Group1.">From Users and groups, add Group1.</option>
          <option value="From Users and groups, add the IT department users">From Users and groups, add the IT department users</option>
        </select>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; max-width: 750px;">
        <span style="font-weight: 600;">For the configuration object from Settings:</span>
        <select class="inline-select" data-key="configObjectSettings" style="padding: 6px; width: 420px; border: 1px solid #ccc; border-radius: 4px;">
          <option value="">-- Select Option --</option>
          <option value="Add a scoping filter">Add a scoping filter</option>
          <option value="Add new attribute mappings">Add new attribute mappings</option>
          <option value="Modify the attribute mappings">Modify the attribute mappings</option>
        </select>
      </div>
    </div>
  `,

  answer: {
    configObject: "From Users and groups, add Group1.",
    configObjectSettings: "Add a scoping filter"
  },

  explanation: `
    <p>
      <strong>For the configuration object: From Users and groups, add Group1.</strong><br>
      <em>Explanation:</em> To scope cross-tenant synchronization to a group, you first add the group under Users and groups. This minimizes administrative effort by targeting Group1 directly instead of picking individual IT users manually.
    </p>
    <p>
      <strong>For the configuration object from Settings: Add a scoping filter</strong><br>
      <em>Explanation:</em> Since Group1 contains both IT and accounts department users, but only the IT department users need to be synchronized, you add a scoping filter (e.g., based on department) to restrict provisioning to just the desired subset of users.
    </p>
  `
},
{
  id: 114,
  type: "hotspot",

  question: `
    <p><strong>Question 114: Hotspot</strong></p>
    <p>You have a Microsoft 365 tenant that contains the administrative units shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q114_table1.jpg" alt="Table 1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>The subscription contains the administrators shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q114_table2.jpg" alt="Table 2" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>The subscription contains the users shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q114_table3.jpg" alt="Table 3" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>For each of the following statements, select Yes if the statement is true. Otherwise, select No.</p>
    <p><em>NOTE: Each correct selection is worth one point.</em></p>

    <div style="margin-top: 15px; background: #f9f9f9; padding: 16px; border: 1px solid #ddd; border-radius: 4px;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="border-bottom: 1px solid #ccc;">
            <th style="text-align: left; padding: 8px;">Statements</th>
            <th style="text-align: center; width: 80px; padding: 8px;">Yes</th>
            <th style="text-align: center; width: 80px; padding: 8px;">No</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 10px 8px;">Admin1 can reset the password of User1.</td>
            <td style="text-align: center; padding: 10px 8px;"><input type="radio" name="stmt1" value="Yes" data-key="stmt1"></td>
            <td style="text-align: center; padding: 10px 8px;"><input type="radio" name="stmt1" value="No" data-key="stmt1"></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 10px 8px;">Admin2 can reset the password of User2.</td>
            <td style="text-align: center; padding: 10px 8px;"><input type="radio" name="stmt2" value="Yes" data-key="stmt2"></td>
            <td style="text-align: center; padding: 10px 8px;"><input type="radio" name="stmt2" value="No" data-key="stmt2"></td>
          </tr>
          <tr>
            <td style="padding: 10px 8px;">Admin3 can reset the password of User3.</td>
            <td style="text-align: center; padding: 10px 8px;"><input type="radio" name="stmt3" value="Yes" data-key="stmt3"></td>
            <td style="text-align: center; padding: 10px 8px;"><input type="radio" name="stmt3" value="No" data-key="stmt3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,

  answer: {
    stmt1: "Yes",
    stmt2: "Yes",
    stmt3: "No"
  },

  explanation: `
    <p>
      <strong>Admin1 can reset the password of User1: Yes</strong><br>
      <em>Explanation:</em> Admin1 is scoped with the appropriate permissions over administrative units containing User1, allowing them to perform password resets.
    </p>
    <p>
      <strong>Admin2 can reset the password of User2: Yes</strong><br>
      <em>Explanation:</em> Admin2 has the correct role scope assigned over the administrative unit containing User2.
    </p>
    <p>
      <strong>Admin3 can reset the password of User3: No</strong><br>
      <em>Explanation:</em> Admin3 lacks the necessary administrative unit scoped role or permissions for User3's specific administrative unit context.
    </p>
  `
},
{
  id: 117,
  type: "single",

  question: `
    <p><strong>Question 117</strong></p>
    <p>You have a Microsoft Entra tenant that uses Microsoft Entra ID Protection and contains the users shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q17_table1.jpg" alt="table 1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>You need to implement a Conditional Access policy that enforces a remediation requirement for risky users. Which users can create the policy?</p>
  `,

  options: [
    "User1 only",
    "User1 and User2 only",
    "User1 and User3 only",
    "User1, User2, and User3"
  ],

  answer: 1,

  explanation: `
    <p>
      <strong>Correct Answer: B (User1 and User2 only)</strong>
    </p>
    <p>
      <em>Explanation:</em> Creating and managing Conditional Access policies requires appropriate administrative privileges (such as the Conditional Access Administrator or Security Administrator role), which are assigned to User1 and User2. User3 does not possess the required permissions.
    </p>
  `
},
{
  id: 119,
  type: "single",

  question: `
    <p>You configure a new Microsoft 365 tenant to use a default domain name of contoso.com.</p>
    <p>You need to ensure that you can control access to Microsoft 365 resources by using conditional access policies.</p>
    <p>What should you do first?</p>
  `,

  options: [
    "Disable the User consent settings.",
    "Disable Security defaults.",
    "Configure a multi-factor authentication (MFA) registration policy.",
    "Configure password protection for Windows Server Active Directory."
  ],

  answer: 1,

  explanation: `
    <p>
      <strong>Why option B is correct:</strong><br>
      Taken from article in answer: “If your tenant was created on or after October 22, 2019, it is possible security defaults are already enabled in your tenant. To protect all of our users, security defaults are being rolled out to all new tenants created.”<br>
      To enable Conditional Access Policies (CAP), you have to disable Security defaults.
    </p>
    <p>
      <strong>References:</strong><br>
      https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/concept-fundamentals-security-defaults
    </p>
  `
},
{
  id: 120,
  type: "single",

  question: `
    <p>Your company has a Microsoft 365 tenant.</p>
    <p>The company has a call center that contains 300 users. In the call center, the users share desktop computers and might use a different computer every day.</p>
    <p>The call center computers are NOT configured for biometric identification.</p>
    <p>The users are prohibited from having a mobile phone in the call center.</p>
    <p>You need to require multi-factor authentication (MFA) for the call center users when they access Microsoft 365 services.</p>
    <p>What should you include in the solution?</p>
  `,

  options: [
    "a named network location",
    "the Microsoft Authenticator app",
    "Windows Hello for Business authentication",
    "FIDO2 tokens"
  ],

  answer: 3,

  explanation: `
    <p>
      <strong>Why option D is correct:</strong><br>
      <ul>
        <li><strong>A. a named network location:</strong> Not an MFA option.</li>
        <li><strong>B. the Microsoft Authenticator app:</strong> No mobile phones are allowed in the call center.</li>
        <li><strong>C. Windows Hello for Business authentication:</strong> There are no biometric options in the office, and the data is stored locally on the device, whereas users switch PCs every day.</li>
        <li><strong>D. FIDO2 tokens:</strong> Ideal for shared workstation scenarios where users don't have phones and move between different computers daily, providing a secure hardware-based passwordless MFA method.</li>
      </ul>
    </p>
    <p>
      <strong>References:</strong><br>
      https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-authentication-passwordless
    </p>
  `
},
{
  id: 121,
  type: "single",

  question: `
    <p>You have an Azure Active Directory (Azure AD) tenant named contoso.com.</p>
    <p>All users who run applications registered in Azure AD are subject to conditional access policies. You need to prevent the users from using legacy authentication.</p>
    <p>What should you include in the conditional access policies to filter out legacy authentication attempts?</p>
  `,

  options: [
    "a cloud apps or actions condition",
    "a user risk condition",
    "a client apps condition",
    "a sign-in risk condition"
  ],

  answer: 2,

  explanation: `
    <p>
      <strong>Directly blocking legacy authentication:</strong><br>
      The easiest way to block legacy authentication across your entire organization is by configuring a Conditional Access policy that applies specifically to legacy authentication clients and blocks access.
    </p>
    <p>
      <strong>Client apps:</strong><br>
      By default, all newly created Conditional Access policies will apply to all client app types even if the client apps condition is not configured.
    </p>
    <p>
      <strong>References:</strong><br>
      https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/block-legacy-authentication
    </p>
  `
},
{
  id: 122,
  type: "single",

  question: `
    <p>You have an Azure Active Directory (Azure AD) tenant. You open the risk detections report.</p>
    <p>Which risk detection type is classified as a user risk?</p>
  `,

  options: [
    "impossible travel",
    "anonymous IP address",
    "atypical travel",
    "leaked credentials"
  ],

  answer: 3,

  explanation: `
    <p>
      <strong>Leaked credentials</strong> indicates that the user's valid credentials have been leaked.<br>
      <em>Note:</em> There are several versions of this question in the exam. The question can have other incorrect answer options, including the following:<br>
      • password spray<br>
      • malicious IP address<br>
      • unfamiliar sign-in properties
    </p>
    <p>
      <strong>References:</strong><br>
      https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks
    </p>
  `
},
{
  id: 123,
  type: "single",

  question: `
    <p>You have a Microsoft 365 tenant.</p>
    <p>All users have computers that run Windows 10. Most computers are company-owned and joined to Azure Active Directory (Azure AD). Some computers are user- owned and are only registered in Azure AD.</p>
    <p>You need to prevent users who connect to Microsoft SharePoint Online on their user-owned computer from downloading or syncing files. Other users must NOT be restricted.</p>
    <p>Which policy type should you create?</p>
  `,

  options: [
    "a Microsoft Cloud App Security activity policy that has Microsoft Office 365 governance actions configured",
    "an Azure AD conditional access policy that has session controls configured",
    "an Azure AD conditional access policy that has client apps conditions configured",
    "a Microsoft Cloud App Security app discovery policy that has governance actions configured"
  ],

  answer: 2,

  explanation: `
    <p>
      <strong>Why option C is correct:</strong><br>
      After review this on a real tenant first you need to select SPO in Cloud apps or actions.<br>
      That action will enable in session settings. App enforced restrictions might require additional admin configurations within the cloud apps. The restrictions will only take effect for new sessions.<br>
      So because first action is configure the application that will be affected by sessions settings, choosing C, instead B can the option to select.
    </p>
    <p>
      <em>Note on phrasing:</em> This is not worded properly enough. In CA, if you go into session controls and select 'Use Conditional Access App Control', you can monitor or block downloads. However, options like restricting downloads/syncs based on device state (such as user-owned devices) point towards utilizing conditional access controls.
    </p>
  `
},
{
  id: 124,
  type: "single",

  question: `
    <p>You have an Active Directory domain that syncs to an Azure Active Directory (Azure AD) tenant.</p>
    <p>The on-premises network contains a VPN server that authenticates to the on-premises Active Directory domain. The VPN server does NOT support Azure Multi-Factor Authentication (MFA).</p>
    <p>You need to recommend a solution to provide Azure MFA for VPN connections. What should you include in the recommendation?</p>
  `,

  options: [
    "Azure AD Application Proxy",
    "an Azure AD Password Protection proxy",
    "Network Policy Server (NPS)",
    "a pass-through authentication proxy"
  ],

  answer: 2,

  explanation: `
    <p>
      <strong>The correct answer is C. Network Policy Server (NPS).</strong>
    </p>
    <p>
      Network Policy Server (NPS) is a server role that allows you to implement RADIUS authentication, authorization, and accounting. You can use NPS to integrate Azure MFA with your VPN server.
    </p>
  `
},
{
  id: 125,
  type: "single",

  question: `
    <p>You have a Microsoft 365 tenant.</p>
    <p>The Azure Active Directory (Azure AD) tenant is configured to sync with an on-premises Active Directory domain.</p>
    <p>The domain contains the servers shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q125_table1.jpg" alt="table 1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p>The domain controllers are prevented from communicating to the internet. You implement Azure AD Password Protection on Server1 and Server2.</p>
    <p>You deploy a new server named Server4 that runs Windows Server 2019.</p>
    <p>You need to ensure that Azure AD Password Protection will continue to work if a single server fails. What should you implement on Server4?</p>
  `,

  options: [
    "Azure AD Connect",
    "Azure AD Application Proxy",
    "Password Change Notification Service (PCNS)",
    "the Azure AD Password Protection proxy service"
  ],

  answer: 3,

  explanation: `
    <p>
      <strong>The Azure AD Password Protection proxy service</strong> initiates an outbound connection (Port 443) to Azure to pull the banned password list.<br>
      The downloaded banned password list is pulled by the agent installed on DCs.
    </p>
    <p>
      <strong>References:</strong><br>
      https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-password-ban-bad-on-premises-deploy
    </p>
  `
},
{
  id: 126,
  type: "dragdrop",

  question: `
    <p><strong>Question 126: Drag and Drop</strong></p>
    <p>You have a Microsoft 365 E5 tenant. You purchase a cloud app named App1.</p>
    <p>You need to enable real-time session-level monitoring of App1 by using Microsoft Cloud App Security.</p>
    <p>In which order should you perform the actions? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.</p>
  `,

  items: [
    { id: "act1", text: "From Microsoft Cloud App Security, create a session policy." },
    { id: "act2", text: "Publish App1 in Azure Active Directory (Azure AD)." },
    { id: "act3", text: "Create a conditional access policy that has session controls configured." },
    { id: "act4", text: "From Microsoft Cloud App Security, modify the Connected apps settings for App1." }
  ],

  targets: [
    { id: "step1", label: "Step 1" },
    { id: "step2", label: "Step 2" },
    { id: "step3", label: "Step 3" },
    { id: "step4", label: "Step 4" }
  ],

  answer: {
    step1: "act2",
    step2: "act3",
    step3: "act4",
    step4: "act1"
  },

  explanation: `
    <p>
      <strong>Steps breakdown for real-time session monitoring with Microsoft Cloud App Security (MCAS):</strong>
    </p>
    <ol>
      <li><strong>Publish App1 in Azure Active Directory (Azure AD):</strong> The application must first be integrated and published within Azure AD so it can be managed.</li>
      <li><strong>Create a conditional access policy that has session controls configured:</strong> Route user traffic to MCAS using Conditional Access session controls (Conditional Access App Control).</li>
      <li><strong>From Microsoft Cloud App Security, modify the Connected apps settings for App1:</strong> You need to connect the app via Conditional Access App Control within MCAS.</li>
      <li><strong>From Microsoft Cloud App Security, create a session policy:</strong> Define specific real-time monitoring and control behaviors for the session.</li>
    </ol>
    <p>
      <strong>References:</strong><br>
      https://techcommunity.microsoft.com/t5/itops-talk-blog/step-by-step-blocking-data-downloads-via-microsoft-cloud-app/ba-p/326357
    </p>
  `
},
{
  id: 127,
  type: "single",

  question: `
    <p>You have a Microsoft 365 tenant.</p>
    <p>All users have mobile phones and laptops.</p>
    <p>The users frequently work from remote locations that do not have Wi-Fi access or mobile phone connectivity. While working from the remote locations, the users connect their laptop to a wired network that has internet access.</p>
    <p>You plan to implement multi-factor authentication (MFA).</p>
    <p>Which MFA authentication method can the users use from the remote location?</p>
  `,

  options: [
    "a notification through the Microsoft Authenticator app",
    "an app password",
    "Windows Hello for Business",
    "SMS"
  ],

  answer: 2,

  explanation: `
    <p>
      In Windows 10, Windows Hello for Business replaces passwords with strong two-factor authentication on PCs and mobile devices. This authentication consists of a new type of user credential that is tied to a device and uses a biometric or PIN.
    </p>
    <p>
      After an initial two-step verification of the user during enrollment, Windows Hello is set up on the user's device and Windows asks the user to set a gesture, which can be a biometric, such as a fingerprint, or a PIN. The user provides the gesture to verify their identity. Windows then uses Windows Hello to authenticate users.
    </p>
    <p>
      <strong>Incorrect Answers:</strong><br>
      • <strong>A:</strong> A notification through the Microsoft Authenticator app requires connectivity to send the verification code to the device requesting the logon.<br>
      • <strong>B:</strong> An app password can be used to open an application but it cannot be used to sign in to a computer.<br>
      • <strong>D:</strong> SMS requires a mobile phone.
    </p>
    <p>
      <strong>References:</strong><br>
      https://docs.microsoft.com/en-us/azure/active-directory/authentication/concept-authentication-methods<br>
      https://docs.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/hello-overview
    </p>
  `
},
  {
    id: 128,
    type: "single",
    question: `
      <div style="border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;">
        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>
        After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
      </div>
      <p style="text-align: left;">You have a Microsoft 365 tenant.</p><br>
      <p style="text-align: left;">All users must use the Microsoft Authenticator app for multi-factor authentication (MFA) when accessing Microsoft 365 services.</p><br>
      <p style="text-align: left;">Some users report that they received an MFA prompt on their Microsoft Authenticator app without initiating a sign-in request.</p><br>
      <p style="text-align: left;">You need to block the users automatically when they report an MFA request that they did not initiate.</p><br>
      <p style="text-align: left;"><strong>Solution:</strong> From the Azure portal, you configure the Notifications settings for multi-factor authentication (MFA). Does this meet the goal?</p>
    `,
    options: ["Yes", "No"],
    answer: 1, // B = No
    explanation: `
      <p>You need to configure the fraud alert settings.</p>
      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-mfasettings</p>
    `
  },
  {
    id: 129,
    type: "single",
    question: `
      <div style="border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;">
        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>
        After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
      </div>
      <p style="text-align: left;">You have a Microsoft 365 tenant.</p><br>
      <p style="text-align: left;">All users must use the Microsoft Authenticator app for multi-factor authentication (MFA) when accessing Microsoft 365 services.</p><br>
      <p style="text-align: left;">Some users report that they received an MFA prompt on their Microsoft Authenticator app without initiating a sign-in request.</p><br>
      <p style="text-align: left;">You need to block the users automatically when they report an MFA request that they did not initiate.</p><br>
      <p style="text-align: left;"><strong>Solution:</strong> From the Azure portal, you configure the Account lockout settings for multi-factor authentication (MFA). Does this meet the goal?</p>
    `,
    options: ["Yes", "No"],
    answer: 1, // B = No
    explanation: `
      <p>The account lockout settings are applied only when a PIN code is entered for the MFA prompt. To automatically block users who report fraud, you need to configure Fraud Alert settings.</p>
      <p><strong>Reference:</strong> https://learn.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-mfasettings</p>
    `
  },
  {
    id: 130,
    type: "single",
    question: `
      <div style="border: 1px solid #b8daff; background-color: #e8f4f8; padding: 12px; border-radius: 4px; margin-bottom: 15px; font-size: 13px; color: #004085;">
        This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.<br><br>
        After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.
      </div>
      <p style="text-align: left;">You have a Microsoft 365 tenant.</p><br>
      <p style="text-align: left;">All users must use the Microsoft Authenticator app for multi-factor authentication (MFA) when accessing Microsoft 365 services.</p><br>
      <p style="text-align: left;">Some users report that they received an MFA prompt on their Microsoft Authenticator app without initiating a sign-in request.</p><br>
      <p style="text-align: left;">You need to block the users automatically when they report an MFA request that they did not initiate.</p><br>
      <p style="text-align: left;"><strong>Solution:</strong> From the Azure portal, you configure the Block/unblock users settings for multi-factor authentication (MFA). Does this meet the goal?</p>
    `,
    options: ["Yes", "No"],
    answer: 1, // B = No
    explanation: `
      <p>You need to configure the fraud alert settings under Azure Active Directory > Security > Multifactor authentication > Fraud alert to automatically block users when they submit fraud alerts.</p>
      <p><strong>Reference:</strong> https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-mfasettings</p>
    `
  },
{
  id: 131,
  type: "dropdown",

  question: `
    <p style="text-align: left;">You have a Microsoft 365 tenant.</p>
    <p style="text-align: left;">You need to identify users who have leaked credentials. The solution must meet the following requirements:</p>
    <div style="margin: 10px 0; padding: 10px 15px; background: #fff; border-left: 4px solid #0078d4; border: 1px solid #e1dfdd; border-radius: 2px;">
      <p style="margin: 0; text-align: left;">Identify sign-ins by users who are suspected of having leaked credentials.<br>
      Flag the sign-ins as a high-risk event.<br>
      Immediately enforce a control to mitigate the risk, while still allowing the user to access applications.</p>
    </div>
    <p style="text-align: left;">What should you use? <br>To answer, select the appropriate options in the answer area.</p>

    <div style="margin-top: 15px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <label style="text-align: left; font-weight: 500;">To classify leaked credentials as high-risk, use:</label>
          <select class="inline-select" data-key="dropdown_1" style="padding: 6px; width: 100%;">
            <option value="">-- Select Option --</option>
            <option value="Azure Active Directory (Azure AD) Identity Protection">Azure Active Directory (Azure AD) Identity Protection</option>
            <option value="Azure Active Directory (Azure AD) Privileged Identity Management (PIM)">Azure Active Directory (Azure AD) Privileged Identity Management (PIM)</option>
            <option value="Identity Governance">Identity Governance</option>
            <option value="Self-service password reset (SSPR)">Self-service password reset (SSPR)</option>
          </select>
        </div>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <label style="text-align: left; font-weight: 500;">To trigger remediation, use:</label>
          <select class="inline-select" data-key="dropdown_2" style="padding: 6px; width: 100%;">
            <option value="">-- Select Option --</option>
            <option value="Client apps not using Modern authentication">Client apps not using Modern authentication</option>
            <option value="Device state">Device state</option>
            <option value="Sign-in risk">Sign-in risk</option>
            <option value="User location">User location</option>
            <option value="User risk">User risk</option>
          </select>
        </div>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <label style="text-align: left; font-weight: 500;">To mitigate the risk, select:</label>
          <select class="inline-select" data-key="dropdown_3" style="padding: 6px; width: 100%;">
            <option value="">-- Select Option --</option>
            <option value="Apply app enforced restrictions">Apply app enforced restrictions</option>
            <option value="Block access">Block access</option>
            <option value="Grant access but require app protection policy">Grant access but require app protection policy</option>
            <option value="Grant access but require password change">Grant access but require password change</option>
          </select>
        </div>
      </div>
    </div>
  `,

  answer: {
    dropdown_1: "Azure Active Directory (Azure AD) Identity Protection",
    dropdown_2: "User risk",
    dropdown_3: "Grant access but require password change"
  },

  explanation: `
    <p><strong>Explanation:</strong></p>
    <ul>
      <li><strong>Azure Active Directory (Azure AD) Identity Protection:</strong> Used to detect risks such as leaked credentials.</li>
      <li><strong>User risk:</strong> Leaked credentials represent a user risk condition (as opposed to sign-in risk, which evaluates the real-time sign-in attempt properties).</li>
      <li><strong>Grant access but require password change:</strong> Mitigates the risk by forcing a secure password reset upon the next sign-in while still allowing authorized access, satisfying the requirement to allow users to continue accessing applications safely.</li>
    </ul>
    <p>
      <strong>References:</strong><br>
      https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks
    </p>
  `
},
{
  id: 132,
  type: "dropdown",

  question: `
    <p><strong>Question 132: Hotspot</strong></p>
    <p>You have an Azure Active Directory (Azure AD) tenant that contains the users shown in the following table.</p>
    
    <div style="margin-bottom: 15px; text-align: center;">
      <img src="images/q132_table1.jpg" alt="q132 table 1" style="width: 100%; max-width: 550px; height: auto; border: 1px solid #ccc; border-radius: 4px;">
    </div>

    <p style="text-align: left;">You plan to implement Azure AD Identity Protection.</p>
    <p style="text-align: left;">Which users can configure the user risk policy, and which users can view the risky users report? To answer, select the appropriate options in the answer area.</p>
    <p style="text-align: left;"><em>NOTE: Each correct selection is worth one point.</em></p>

    <div style="margin-top: 15px; background: #f9f9f9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <label style="text-align: left; font-weight: 500;">Configure the user risk policy:</label>
          <select class="inline-select" data-key="dropdown_1" style="padding: 6px; width: 100%;">
            <option value="">-- Select Option --</option>
            <option value="User3 only">User3 only</option>
            <option value="User3 and User4 only">User3 and User4 only</option>
            <option value="User1, User2, and User3 only">User1, User2, and User3 only</option>
            <option value="User1, User3, and User4 only">User1, User3, and User4 only</option>
            <option value="User1, User2, User3, and User4">User1, User2, User3, and User4</option>
          </select>
        </div>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <label style="text-align: left; font-weight: 500;">View the risky users report:</label>
          <select class="inline-select" data-key="dropdown_2" style="padding: 6px; width: 100%;">
            <option value="">-- Select Option --</option>
            <option value="User3 only">User3 only</option>
            <option value="User3 and User4 only">User3 and User4 only</option>
            <option value="User1, User2, and User3 only">User1, User2, and User3 only</option>
            <option value="User1, User3, and User4 only">User1, User3, and User4 only</option>
            <option value="User1, User2, User3, and User4">User1, User2, User3, and User4</option>
          </select>
        </div>
      </div>
    </div>
  `,

  answer: {
    dropdown_1: "User3 only",
    dropdown_2: "User3 and User4 only"
  },

  explanation: `
    <p><strong>Explanation:</strong></p>
    <ul>
      <li><strong>Configure the user risk policy:</strong> <strong>User3 only</strong> (Security Administrator). Security Administrators have update access to Identity Protection policies like the user risk policy.</li>
      <li><strong>View the risky users report:</strong> <strong>User3 and User4 only</strong> (Security Administrator and Security Operator). Both roles have permissions to read/view Identity Protection reports such as the Risky Users Report.</li>
    </ul>
    <p>
      <strong>References:</strong><br>
      https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection
    </p>
  `
}
];
///*SIMULATION QUESTION FROM 81 - 84 IS SKIPT* question: 111 needs clarifications for its corresponding answer ///
///* question 3 missing table*///

///* question 112 needs clarification for its answer*///
///* question 113 needs clarification for its answer*///
///* question 115, 116 ,118 simulation well get back later*///
///* question 115, 116 , simulation well get back later*///
///* question 123 , explanation is confusing*///
