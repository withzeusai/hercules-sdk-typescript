// File generated from our OpenAPI spec by Scalar. See README.md for details.

// Smoke test: calls every generated operation once to confirm the SDK can reach each endpoint.
// Run it from this repo with `bun tests/smoke-test.ts`. Each case below calls one SDK method
// exactly the way the SDK exposes it (positional params, request body, pagination, streaming).
//
// Two environment variables tune a run:
//   - SCALAR_SMOKE_FILTER: comma-separated needles; only operations whose name or path contains
//     one of them run, so you can smoke-test a subset without editing this file.
//   - SCALAR_SMOKE_REPORT: a file path; when set, the run writes a JSON report there instead of
//     printing a table. The generator uses this to collect per-operation results.
import { writeFileSync } from 'node:fs';

// The package exports the client class. The client reads auth and the base URL from the
// environment, so it needs no constructor options to point at a server.
import Hercules from '@usehercules/sdk';

// One shared client runs every case.
const client = new Hercules();

// The result of running one case, collected for the JSON report or the printed table.
type SmokeResult = {
  operation: string;
  method: string;
  path: string;
  label?: string;
  status: 'passed' | 'failed';
  durationMs: number;
  error?: string;
};

// One or two entries per generated operation: the first passes only the arguments the method
// requires, the second also fills every optional parameter and body property. `label` says which
// is which, and is absent when the operation has no optional argument and so has only one case.
// `run` performs the real SDK call; the other fields are metadata used for filtering and
// reporting. This list is generated, so it stays in sync with the SDK surface.
const cases: {
  operation: string;
  method: string;
  path: string;
  label?: string;
  run: () => Promise<unknown>;
}[] = [
  {
    operation: 'query',
    method: 'POST',
    path: '/v1/analytics/query',
    label: 'required params',
    run: async () => {
      const query = await client.analytics.query({
        sql: 'x',
      });
    },
  },

  {
    operation: 'query',
    method: 'POST',
    path: '/v1/analytics/query',
    label: 'all params',
    run: async () => {
      const query = await client.analytics.query({
        sql: 'x',
        params: {},
        timeout_ms: 0,
      });
    },
  },

  {
    operation: 'listTables',
    method: 'GET',
    path: '/v1/analytics/tables',
    run: async () => {
      const analytics = await client.analytics.listTables();
    },
  },

  {
    operation: 'status',
    method: 'GET',
    path: '/v1/analytics/status',
    run: async () => {
      const status = await client.analytics.status();
    },
  },

  {
    operation: 'accept',
    method: 'POST',
    path: '/v1/iam/invitations/accept',
    run: async () => {
      const invitation = await client.iam.invitations.accept({
        actor_user_id: 'x',
        invitation_token: 'x',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants',
    label: 'required params',
    run: async () => {
      const page = await client.iam.tenants.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants',
    label: 'all params',
    run: async () => {
      const page = await client.iam.tenants.list({
        status: 'active',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/iam/tenants',
    label: 'required params',
    run: async () => {
      const tenant = await client.iam.tenants.create({
        actor_user_id: 'x',
        name: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/iam/tenants',
    label: 'all params',
    run: async () => {
      const tenant = await client.iam.tenants.create({
        actor_user_id: 'x',
        name: 'x',
        access_mode: 'open',
        default_role: {
          id: 'x',
        },
        owner_user_id: 'x',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}',
    run: async () => {
      const tenant = await client.iam.tenants.get('tenantId');
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/iam/tenants/{tenant_id}',
    label: 'required params',
    run: async () => {
      const tenant = await client.iam.tenants.update('tenantId', {
        actor_user_id: 'x',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/iam/tenants/{tenant_id}',
    label: 'all params',
    run: async () => {
      const tenant = await client.iam.tenants.update('tenantId', {
        actor_user_id: 'x',
        name: 'x',
        default_role: {
          id: 'x',
        },
        access_mode: 'open',
      });
    },
  },

  {
    operation: 'archive',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/archive',
    run: async () => {
      const tenant = await client.iam.tenants.archive('tenantId', {
        actor_user_id: 'x',
      });
    },
  },

  {
    operation: 'unarchive',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/unarchive',
    run: async () => {
      const tenant = await client.iam.tenants.unarchive('tenantId', {
        actor_user_id: 'x',
      });
    },
  },

  {
    operation: 'evaluateAccess',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/evaluate-access',
    run: async () => {
      const tenant = await client.iam.tenants.evaluateAccess('tenantId', {
        actor_user_id: 'x',
      });
    },
  },

  {
    operation: 'createInvitation',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/invitations',
    label: 'required params',
    run: async () => {
      const tenant = await client.iam.tenants.createInvitation('tenantId', {
        actor_user_id: 'x',
      });
    },
  },

  {
    operation: 'createInvitation',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/invitations',
    label: 'all params',
    run: async () => {
      const tenant = await client.iam.tenants.createInvitation('tenantId', {
        actor_user_id: 'x',
        roles: [],
        constraint: {
          type: 'email',
          value: 'user@example.com',
        },
        max_uses: 0,
        delivery: {
          to_emails: [],
        },
        redirect_path: 'x',
        expires_at: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'listRoleAssignments',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/role-assignments',
    label: 'required params',
    run: async () => {
      const page = await client.iam.tenants.listRoleAssignments('tenantId');
    },
  },

  {
    operation: 'listRoleAssignments',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/role-assignments',
    label: 'all params',
    run: async () => {
      const page = await client.iam.tenants.listRoleAssignments('tenantId', {
        membership_id: 'membershipId',
        group_id: 'groupId',
        role_id: 'roleId',
      });
    },
  },

  {
    operation: 'listResourceRoleAssignments',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/resource-role-assignments',
    label: 'required params',
    run: async () => {
      const page = await client.iam.tenants.listResourceRoleAssignments('tenantId');
    },
  },

  {
    operation: 'listResourceRoleAssignments',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/resource-role-assignments',
    label: 'all params',
    run: async () => {
      const page = await client.iam.tenants.listResourceRoleAssignments('tenantId', {
        resource_type_id: 'resourceTypeId',
        resource_type_key: 'resourceTypeKey',
        external_id: 'externalId',
        membership_id: 'membershipId',
        group_id: 'groupId',
        role_id: 'roleId',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/members',
    label: 'required params',
    run: async () => {
      const member = await client.iam.tenants.members.create('tenantId', {
        actor_user_id: 'x',
        user_id: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/members',
    label: 'all params',
    run: async () => {
      const member = await client.iam.tenants.members.create('tenantId', {
        actor_user_id: 'x',
        user_id: 'x',
        status: 'active',
        role: {
          id: 'x',
        },
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/members',
    label: 'required params',
    run: async () => {
      const page = await client.iam.tenants.members.list('tenantId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/members',
    label: 'all params',
    run: async () => {
      const page = await client.iam.tenants.members.list('tenantId', {
        status: 'active',
        role_id: 'roleId',
        user_id: 'userId',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}',
    run: async () => {
      const member = await client.iam.tenants.members.get('membershipId', {
        tenant_id: 'tenantId',
      });
    },
  },

  {
    operation: 'updateStatus',
    method: 'PATCH',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}',
    run: async () => {
      const member = await client.iam.tenants.members.updateStatus('membershipId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        status: 'active',
      });
    },
  },

  {
    operation: 'remove',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}',
    label: 'required params',
    run: async () => {
      const member = await client.iam.tenants.members.remove('membershipId', {
        tenant_id: 'tenantId',
      });
    },
  },

  {
    operation: 'remove',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}',
    label: 'all params',
    run: async () => {
      const member = await client.iam.tenants.members.remove('membershipId', {
        tenant_id: 'tenantId',
        actor_user_id: 'actorUserId',
      });
    },
  },

  {
    operation: 'assignRole',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}/role-assignments',
    label: 'required params',
    run: async () => {
      const member = await client.iam.tenants.members.assignRole('membershipId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        role: {
          id: 'x',
        },
      });
    },
  },

  {
    operation: 'assignRole',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}/role-assignments',
    label: 'all params',
    run: async () => {
      const member = await client.iam.tenants.members.assignRole('membershipId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        role: {
          id: 'x',
        },
        expires_at: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'replaceRoles',
    method: 'PUT',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}/role-assignments',
    run: async () => {
      const member = await client.iam.tenants.members.replaceRoles('membershipId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        roles: [],
      });
    },
  },

  {
    operation: 'unassignRole',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}/role-assignments/{assignment_id}',
    label: 'required params',
    run: async () => {
      const member = await client.iam.tenants.members.unassignRole('assignmentId', {
        tenant_id: 'tenantId',
        membership_id: 'membershipId',
      });
    },
  },

  {
    operation: 'unassignRole',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}/role-assignments/{assignment_id}',
    label: 'all params',
    run: async () => {
      const member = await client.iam.tenants.members.unassignRole('assignmentId', {
        tenant_id: 'tenantId',
        membership_id: 'membershipId',
        actor_user_id: 'actorUserId',
      });
    },
  },

  {
    operation: 'listRoleAssignments',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}/role-assignments',
    run: async () => {
      const page = await client.iam.tenants.members.listRoleAssignments('membershipId', {
        tenant_id: 'tenantId',
      });
    },
  },

  {
    operation: 'assignResourceRole',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}/resource-role-assignments',
    label: 'required params',
    run: async () => {
      const member = await client.iam.tenants.members.assignResourceRole('membershipId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        role: {
          id: 'x',
        },
        resource_type: {
          id: 'x',
        },
        external_id: 'x',
      });
    },
  },

  {
    operation: 'assignResourceRole',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}/resource-role-assignments',
    label: 'all params',
    run: async () => {
      const member = await client.iam.tenants.members.assignResourceRole('membershipId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        role: {
          id: 'x',
        },
        resource_type: {
          id: 'x',
        },
        external_id: 'x',
        expires_at: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'replaceResourceRoles',
    method: 'PUT',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}/resource-role-assignments',
    run: async () => {
      const member = await client.iam.tenants.members.replaceResourceRoles('membershipId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        resource_type: {
          id: 'x',
        },
        external_id: 'x',
        roles: [],
      });
    },
  },

  {
    operation: 'unassignResourceRole',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}/resource-role-assignments/{assignment_id}',
    label: 'required params',
    run: async () => {
      const member = await client.iam.tenants.members.unassignResourceRole('assignmentId', {
        tenant_id: 'tenantId',
        membership_id: 'membershipId',
      });
    },
  },

  {
    operation: 'unassignResourceRole',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}/resource-role-assignments/{assignment_id}',
    label: 'all params',
    run: async () => {
      const member = await client.iam.tenants.members.unassignResourceRole('assignmentId', {
        tenant_id: 'tenantId',
        membership_id: 'membershipId',
        actor_user_id: 'actorUserId',
      });
    },
  },

  {
    operation: 'listResourceRoleAssignments',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/members/{membership_id}/resource-role-assignments',
    run: async () => {
      const page = await client.iam.tenants.members.listResourceRoleAssignments('membershipId', {
        tenant_id: 'tenantId',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/groups',
    label: 'required params',
    run: async () => {
      const group = await client.iam.tenants.groups.create('tenantId', {
        actor_user_id: 'x',
        name: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/groups',
    label: 'all params',
    run: async () => {
      const group = await client.iam.tenants.groups.create('tenantId', {
        actor_user_id: 'x',
        name: 'x',
        description: '',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/groups',
    run: async () => {
      const page = await client.iam.tenants.groups.list('tenantId');
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}',
    run: async () => {
      const group = await client.iam.tenants.groups.get('groupId', {
        tenant_id: 'tenantId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}',
    label: 'required params',
    run: async () => {
      const group = await client.iam.tenants.groups.update('groupId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}',
    label: 'all params',
    run: async () => {
      const group = await client.iam.tenants.groups.update('groupId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        name: 'x',
        description: '',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}',
    label: 'required params',
    run: async () => {
      const group = await client.iam.tenants.groups.delete('groupId', {
        tenant_id: 'tenantId',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}',
    label: 'all params',
    run: async () => {
      const group = await client.iam.tenants.groups.delete('groupId', {
        tenant_id: 'tenantId',
        actor_user_id: 'actorUserId',
      });
    },
  },

  {
    operation: 'archive',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/archive',
    run: async () => {
      const group = await client.iam.tenants.groups.archive('groupId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
      });
    },
  },

  {
    operation: 'unarchive',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/unarchive',
    run: async () => {
      const group = await client.iam.tenants.groups.unarchive('groupId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
      });
    },
  },

  {
    operation: 'assignRole',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/role-assignments',
    label: 'required params',
    run: async () => {
      const group = await client.iam.tenants.groups.assignRole('groupId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        role: {
          id: 'x',
        },
      });
    },
  },

  {
    operation: 'assignRole',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/role-assignments',
    label: 'all params',
    run: async () => {
      const group = await client.iam.tenants.groups.assignRole('groupId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        role: {
          id: 'x',
        },
        expires_at: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'unassignRole',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/role-assignments/{assignment_id}',
    label: 'required params',
    run: async () => {
      const group = await client.iam.tenants.groups.unassignRole('assignmentId', {
        tenant_id: 'tenantId',
        group_id: 'groupId',
      });
    },
  },

  {
    operation: 'unassignRole',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/role-assignments/{assignment_id}',
    label: 'all params',
    run: async () => {
      const group = await client.iam.tenants.groups.unassignRole('assignmentId', {
        tenant_id: 'tenantId',
        group_id: 'groupId',
        actor_user_id: 'actorUserId',
      });
    },
  },

  {
    operation: 'listRoleAssignments',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/role-assignments',
    run: async () => {
      const page = await client.iam.tenants.groups.listRoleAssignments('groupId', {
        tenant_id: 'tenantId',
      });
    },
  },

  {
    operation: 'assignResourceRole',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/resource-role-assignments',
    label: 'required params',
    run: async () => {
      const group = await client.iam.tenants.groups.assignResourceRole('groupId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        role: {
          id: 'x',
        },
        resource_type: {
          id: 'x',
        },
        external_id: 'x',
      });
    },
  },

  {
    operation: 'assignResourceRole',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/resource-role-assignments',
    label: 'all params',
    run: async () => {
      const group = await client.iam.tenants.groups.assignResourceRole('groupId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        role: {
          id: 'x',
        },
        resource_type: {
          id: 'x',
        },
        external_id: 'x',
        expires_at: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'unassignResourceRole',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/resource-role-assignments/{assignment_id}',
    label: 'required params',
    run: async () => {
      const group = await client.iam.tenants.groups.unassignResourceRole('assignmentId', {
        tenant_id: 'tenantId',
        group_id: 'groupId',
      });
    },
  },

  {
    operation: 'unassignResourceRole',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/resource-role-assignments/{assignment_id}',
    label: 'all params',
    run: async () => {
      const group = await client.iam.tenants.groups.unassignResourceRole('assignmentId', {
        tenant_id: 'tenantId',
        group_id: 'groupId',
        actor_user_id: 'actorUserId',
      });
    },
  },

  {
    operation: 'listResourceRoleAssignments',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/resource-role-assignments',
    run: async () => {
      const page = await client.iam.tenants.groups.listResourceRoleAssignments('groupId', {
        tenant_id: 'tenantId',
      });
    },
  },

  {
    operation: 'add',
    method: 'PUT',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/members/{membership_id}',
    run: async () => {
      const member = await client.iam.tenants.groups.members.add('membershipId', {
        tenant_id: 'tenantId',
        group_id: 'groupId',
        actor_user_id: 'x',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/members',
    run: async () => {
      const page = await client.iam.tenants.groups.members.list('groupId', {
        tenant_id: 'tenantId',
      });
    },
  },

  {
    operation: 'remove',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/members/{membership_id}',
    label: 'required params',
    run: async () => {
      const member = await client.iam.tenants.groups.members.remove('membershipId', {
        tenant_id: 'tenantId',
        group_id: 'groupId',
      });
    },
  },

  {
    operation: 'remove',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/groups/{group_id}/members/{membership_id}',
    label: 'all params',
    run: async () => {
      const member = await client.iam.tenants.groups.members.remove('membershipId', {
        tenant_id: 'tenantId',
        group_id: 'groupId',
        actor_user_id: 'actorUserId',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/roles',
    label: 'required params',
    run: async () => {
      const role = await client.iam.tenants.roles.create('tenantId', {
        actor_user_id: 'x',
        key: 'x',
        name: 'x',
        permission_keys: [],
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/roles',
    label: 'all params',
    run: async () => {
      const role = await client.iam.tenants.roles.create('tenantId', {
        actor_user_id: 'x',
        key: 'x',
        name: 'x',
        description: '',
        permission_keys: [],
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/roles',
    label: 'required params',
    run: async () => {
      const page = await client.iam.tenants.roles.list('tenantId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/roles',
    label: 'all params',
    run: async () => {
      const page = await client.iam.tenants.roles.list('tenantId', {
        key: 'key',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/roles/{role_id}',
    run: async () => {
      const role = await client.iam.tenants.roles.get('roleId', {
        tenant_id: 'tenantId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/iam/tenants/{tenant_id}/roles/{role_id}',
    label: 'required params',
    run: async () => {
      const role = await client.iam.tenants.roles.update('roleId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/iam/tenants/{tenant_id}/roles/{role_id}',
    label: 'all params',
    run: async () => {
      const role = await client.iam.tenants.roles.update('roleId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
        name: 'x',
        description: '',
        permission_keys: [],
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/roles/{role_id}',
    label: 'required params',
    run: async () => {
      const role = await client.iam.tenants.roles.delete('roleId', {
        tenant_id: 'tenantId',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/roles/{role_id}',
    label: 'all params',
    run: async () => {
      const role = await client.iam.tenants.roles.delete('roleId', {
        tenant_id: 'tenantId',
        actor_user_id: 'actorUserId',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/access-rules',
    label: 'required params',
    run: async () => {
      const page = await client.iam.tenants.accessRules.list('tenantId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/access-rules',
    label: 'all params',
    run: async () => {
      const page = await client.iam.tenants.accessRules.list('tenantId', {
        effect: 'allow',
        subject_type: 'email',
        include_archived: 'includeArchived',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/access-rules',
    label: 'required params',
    run: async () => {
      const accessRule = await client.iam.tenants.accessRules.create('tenantId', {
        actor_user_id: 'x',
        effect: 'allow',
        subject: {
          type: 'email',
          value: 'user@example.com',
        },
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/access-rules',
    label: 'all params',
    run: async () => {
      const accessRule = await client.iam.tenants.accessRules.create('tenantId', {
        actor_user_id: 'x',
        effect: 'allow',
        subject: {
          type: 'email',
          value: 'user@example.com',
        },
        reason: '',
      });
    },
  },

  {
    operation: 'archive',
    method: 'POST',
    path: '/v1/iam/tenants/{tenant_id}/access-rules/{rule_id}/archive',
    run: async () => {
      const accessRule = await client.iam.tenants.accessRules.archive('ruleId', {
        tenant_id: 'tenantId',
        actor_user_id: 'x',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/audit-events',
    label: 'required params',
    run: async () => {
      const page = await client.iam.tenants.auditEvents.list('tenantId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/audit-events',
    label: 'all params',
    run: async () => {
      const page = await client.iam.tenants.auditEvents.list('tenantId', {
        before: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/iam/tenants/{tenant_id}/invitations',
    run: async () => {
      const page = await client.iam.tenants.invitations.list('tenantId');
    },
  },

  {
    operation: 'revoke',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/invitations/{invitation_id}',
    label: 'required params',
    run: async () => {
      const invitation = await client.iam.tenants.invitations.revoke('invitationId', {
        tenant_id: 'tenantId',
      });
    },
  },

  {
    operation: 'revoke',
    method: 'DELETE',
    path: '/v1/iam/tenants/{tenant_id}/invitations/{invitation_id}',
    label: 'all params',
    run: async () => {
      const invitation = await client.iam.tenants.invitations.revoke('invitationId', {
        tenant_id: 'tenantId',
        actor_user_id: 'actorUserId',
      });
    },
  },

  {
    operation: 'checkout',
    method: 'POST',
    path: '/v1/commerce/checkout',
    label: 'required params',
    run: async () => {
      const commerce = await client.commerce.checkout({
        customer_id: 'cus_1234567890',
        line_items: [],
        success_url: 'https://example.com',
      });
    },
  },

  {
    operation: 'checkout',
    method: 'POST',
    path: '/v1/commerce/checkout',
    label: 'all params',
    run: async () => {
      const commerce = await client.commerce.checkout({
        customer_id: 'cus_1234567890',
        line_items: [],
        success_url: 'https://example.com',
        cancel_url: 'https://example.com',
        promotion_code: '',
        trial_period_days: 0,
        proration_behavior: 'none',
        charge_timing: 'immediate',
        plan_downgrade_behavior: 'immediate',
        interval_downgrade_behavior: 'immediate',
      });
    },
  },

  {
    operation: 'cancel',
    method: 'POST',
    path: '/v1/commerce/cancel',
    run: async () => {
      const commerce = await client.commerce.cancel({
        customer_id: 'cus_1234567890',
        subscription_id: 'sub_1234567890',
        cancellation_timing: 'at_billing_period_end',
      });
    },
  },

  {
    operation: 'check',
    method: 'POST',
    path: '/v1/commerce/check',
    run: async () => {
      const commerce = await client.commerce.check({
        customer_id: 'cus_1234567890',
        resource_id: 'feat_1234567890',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/commerce/checkout-sessions/{checkout_session_id}',
    run: async () => {
      const checkoutSession = await client.commerce.checkoutSessions.get('checkoutSessionId', {
        customer_id: 'cus_1234567890',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/customers',
    label: 'required params',
    run: async () => {
      const page = await client.commerce.customers.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/customers',
    label: 'all params',
    run: async () => {
      const page = await client.commerce.customers.list({
        query: 'query',
        email: 'email',
        created: {
          gt: 0,
          gte: 0,
          lt: 0,
          lte: 0,
        },
        sort: 'sort',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/commerce/customers/{customer_id}',
    run: async () => {
      const customer = await client.commerce.customers.get('cus_1234567890');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/commerce/customers',
    label: 'required params',
    run: async () => {
      const customer = await client.commerce.customers.create({});
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/commerce/customers',
    label: 'all params',
    run: async () => {
      const customer = await client.commerce.customers.create({
        id: 'cus_1234567890',
        name: '',
        email: 'user@example.com',
        phone: '',
        address: {},
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/commerce/customers/{customer_id}',
    label: 'required params',
    run: async () => {
      const customer = await client.commerce.customers.update('cus_1234567890', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/commerce/customers/{customer_id}',
    label: 'all params',
    run: async () => {
      const customer = await client.commerce.customers.update('cus_1234567890', {
        name: '',
        email: 'user@example.com',
        phone: '',
        address: {},
      });
    },
  },

  {
    operation: 'billingPortal',
    method: 'POST',
    path: '/v1/commerce/customers/{customer_id}/billing_portal',
    label: 'required params',
    run: async () => {
      const customer = await client.commerce.customers.billingPortal('cus_1234567890', {});
    },
  },

  {
    operation: 'billingPortal',
    method: 'POST',
    path: '/v1/commerce/customers/{customer_id}/billing_portal',
    label: 'all params',
    run: async () => {
      const customer = await client.commerce.customers.billingPortal('cus_1234567890', {
        return_url: 'https://example.com',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/products',
    label: 'required params',
    run: async () => {
      const page = await client.commerce.products.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/products',
    label: 'all params',
    run: async () => {
      const page = await client.commerce.products.list({
        active: true,
        customer_id: 'cus_1234567890',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/commerce/products/{product_id}',
    label: 'required params',
    run: async () => {
      const product = await client.commerce.products.get('productId');
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/commerce/products/{product_id}',
    label: 'all params',
    run: async () => {
      const product = await client.commerce.products.get('productId', {
        customer_id: 'cus_1234567890',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/commerce/products',
    label: 'required params',
    run: async () => {
      const product = await client.commerce.products.create({
        name: 'x',
        variants: [],
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/commerce/products',
    label: 'all params',
    run: async () => {
      const product = await client.commerce.products.create({
        id: 'prod_1234567890',
        name: 'x',
        description: 'x',
        subscription_group_id: '',
        media: [],
        tags: [],
        metadata: {},
        variants: [],
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/commerce/products/{product_id}',
    label: 'required params',
    run: async () => {
      const product = await client.commerce.products.update('productId', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/commerce/products/{product_id}',
    label: 'all params',
    run: async () => {
      const product = await client.commerce.products.update('productId', {
        name: '',
        description: '',
        subscription_group_id: '',
        media: [],
        tags: [],
        metadata: {},
        active: false,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/products/{product_id}/resources',
    label: 'required params',
    run: async () => {
      const page = await client.commerce.products.resources.list('productId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/products/{product_id}/resources',
    label: 'all params',
    run: async () => {
      const page = await client.commerce.products.resources.list('productId', {
        type: 'feature',
        active: true,
        customer_id: 'cus_1234567890',
      });
    },
  },

  {
    operation: 'attach',
    method: 'POST',
    path: '/v1/commerce/products/{product_id}/resources',
    run: async () => {
      const resource = await client.commerce.products.resources.attach('productId', {
        resource_ids: [],
      });
    },
  },

  {
    operation: 'detach',
    method: 'DELETE',
    path: '/v1/commerce/products/{product_id}/resources',
    run: async () => {
      await client.commerce.products.resources.detach('productId', {
        resource_ids: [],
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/products/{product_id}/variants',
    label: 'required params',
    run: async () => {
      const page = await client.commerce.products.variants.list('productId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/products/{product_id}/variants',
    label: 'all params',
    run: async () => {
      const page = await client.commerce.products.variants.list('productId', {
        active: true,
        customer_id: 'cus_1234567890',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/commerce/products/{product_id}/variants/{variant_id}',
    label: 'required params',
    run: async () => {
      const variant = await client.commerce.products.variants.get('variantId', {
        product_id: 'productId',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/commerce/products/{product_id}/variants/{variant_id}',
    label: 'all params',
    run: async () => {
      const variant = await client.commerce.products.variants.get('variantId', {
        product_id: 'productId',
        customer_id: 'cus_1234567890',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/commerce/products/{product_id}/variants',
    label: 'required params',
    run: async () => {
      const variant = await client.commerce.products.variants.create('productId', {
        name: 'x',
        unit_amount: 0,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/commerce/products/{product_id}/variants',
    label: 'all params',
    run: async () => {
      const variant = await client.commerce.products.variants.create('productId', {
        id: 'var_1234567890',
        name: 'x',
        description: '',
        media: [],
        metadata: {},
        unit_amount: 0,
        currency: 'USD',
        recurring: {
          interval: 'day',
          interval_count: 1,
        },
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/commerce/products/{product_id}/variants/{variant_id}',
    label: 'required params',
    run: async () => {
      const variant = await client.commerce.products.variants.update('variantId', {
        product_id: 'productId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/commerce/products/{product_id}/variants/{variant_id}',
    label: 'all params',
    run: async () => {
      const variant = await client.commerce.products.variants.update('variantId', {
        product_id: 'productId',
        name: '',
        description: '',
        media: [],
        metadata: {},
        active: false,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/coupons',
    label: 'required params',
    run: async () => {
      const page = await client.commerce.coupons.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/coupons',
    label: 'all params',
    run: async () => {
      const page = await client.commerce.coupons.list({
        active: true,
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/commerce/coupons/{coupon_id}',
    run: async () => {
      const coupon = await client.commerce.coupons.get('coupon_1234567890');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/commerce/coupons',
    label: 'required params',
    run: async () => {
      const coupon = await client.commerce.coupons.create({
        code: 'LAUNCH20',
        duration: 'once',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/commerce/coupons',
    label: 'all params',
    run: async () => {
      const coupon = await client.commerce.coupons.create({
        code: 'LAUNCH20',
        id: 'coupon_1234567890',
        name: '',
        percent_off: 0,
        amount_off: 0,
        currency: 'USD',
        duration: 'once',
        duration_in_months: 0,
        max_redemptions: 0,
        redeem_by: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/commerce/coupons/{coupon_id}',
    label: 'required params',
    run: async () => {
      const coupon = await client.commerce.coupons.update('coupon_1234567890', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/commerce/coupons/{coupon_id}',
    label: 'all params',
    run: async () => {
      const coupon = await client.commerce.coupons.update('coupon_1234567890', {
        name: '',
        active: false,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/features',
    label: 'required params',
    run: async () => {
      const page = await client.commerce.features.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/features',
    label: 'all params',
    run: async () => {
      const page = await client.commerce.features.list({
        active: true,
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/commerce/features/{feature_id}',
    run: async () => {
      const feature = await client.commerce.features.get('featureId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/commerce/features',
    label: 'required params',
    run: async () => {
      const feature = await client.commerce.features.create({
        name: 'x',
        metadata: {},
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/commerce/features',
    label: 'all params',
    run: async () => {
      const feature = await client.commerce.features.create({
        id: 'xxxxxx',
        name: 'x',
        description: '',
        metadata: {},
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/commerce/features/{feature_id}',
    label: 'required params',
    run: async () => {
      const feature = await client.commerce.features.update('featureId', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/commerce/features/{feature_id}',
    label: 'all params',
    run: async () => {
      const feature = await client.commerce.features.update('featureId', {
        name: 'x',
        description: '',
        active: false,
        metadata: {},
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/entitlements',
    label: 'required params',
    run: async () => {
      const page = await client.commerce.entitlements.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/commerce/entitlements',
    label: 'all params',
    run: async () => {
      const page = await client.commerce.entitlements.list({
        customer_id: 'customerId',
        feature_id: 'featureId',
        status: 'active',
        grant_type: 'purchase',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/commerce/entitlements/{grant_id}',
    label: 'required params',
    run: async () => {
      const entitlementGrant = await client.commerce.entitlements.get('grantId');
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/commerce/entitlements/{grant_id}',
    label: 'all params',
    run: async () => {
      const entitlementGrant = await client.commerce.entitlements.get('grantId', {
        customer_id: 'cus_1234567890',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/commerce/entitlements',
    label: 'required params',
    run: async () => {
      const entitlementGrant = await client.commerce.entitlements.create({
        customer_id: 'x',
        feature_id: 'x',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/commerce/entitlements',
    label: 'all params',
    run: async () => {
      const entitlementGrant = await client.commerce.entitlements.create({
        customer_id: 'x',
        feature_id: 'x',
        product_id: 'x',
        expires_at: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/commerce/entitlements/{grant_id}',
    label: 'required params',
    run: async () => {
      const entitlementGrant = await client.commerce.entitlements.update('grantId', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/commerce/entitlements/{grant_id}',
    label: 'all params',
    run: async () => {
      const entitlementGrant = await client.commerce.entitlements.update('grantId', {
        customer_id: 'cus_1234567890',
        status: 'active',
        expires_at: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'credentials',
    method: 'GET',
    path: '/v1/connectors/{slug}/credentials',
    label: 'required params',
    run: async () => {
      const connector = await client.connectors.credentials('slug');
    },
  },

  {
    operation: 'credentials',
    method: 'GET',
    path: '/v1/connectors/{slug}/credentials',
    label: 'all params',
    run: async () => {
      const connector = await client.connectors.credentials('slug', {
        connection_id: 'connectionId',
      });
    },
  },

  {
    operation: 'request',
    method: 'POST',
    path: '/v1/connectors/{slug}/request',
    label: 'required params',
    run: async () => {
      const connector = await client.connectors.request('slug', {
        endpoint: 'x',
        method: 'GET',
      });
    },
  },

  {
    operation: 'request',
    method: 'POST',
    path: '/v1/connectors/{slug}/request',
    label: 'all params',
    run: async () => {
      const connector = await client.connectors.request('slug', {
        endpoint: 'x',
        method: 'GET',
        body: {},
        query: {},
        headers: {},
        connection_id: 'x',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/content/collections',
    run: async () => {
      const page = await client.content.collections.list();
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/content/collections/{collection_id}',
    run: async () => {
      const collection = await client.content.collections.get('collectionId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/content/collections',
    label: 'required params',
    run: async () => {
      const collection = await client.content.collections.create({
        api_id: 'x',
        name: '',
        fields: [],
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/content/collections',
    label: 'all params',
    run: async () => {
      const collection = await client.content.collections.create({
        id: '',
        api_id: 'x',
        name: '',
        description: '',
        fields: [],
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/content/collections/{collection_id}',
    label: 'required params',
    run: async () => {
      const collection = await client.content.collections.update('collectionId', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/content/collections/{collection_id}',
    label: 'all params',
    run: async () => {
      const collection = await client.content.collections.update('collectionId', {
        name: '',
        description: '',
        locked: false,
      });
    },
  },

  {
    operation: 'archive',
    method: 'DELETE',
    path: '/v1/content/collections/{collection_id}',
    run: async () => {
      const collection = await client.content.collections.archive('collectionId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/content/collections/{collection_id}/fields',
    label: 'required params',
    run: async () => {
      const field = await client.content.collections.fields.create('collectionId', {
        api_id: 'x',
        name: '',
        type: 'text',
        localized: false,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/content/collections/{collection_id}/fields',
    label: 'all params',
    run: async () => {
      const field = await client.content.collections.fields.create('collectionId', {
        id: '',
        api_id: 'x',
        name: '',
        description: '',
        type: 'text',
        validation: {},
        localized: false,
        display_order: 0,
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/content/collections/{collection_id}/fields/{field_id}',
    label: 'required params',
    run: async () => {
      const field = await client.content.collections.fields.update('fieldId', {
        collection_id: 'collectionId',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/content/collections/{collection_id}/fields/{field_id}',
    label: 'all params',
    run: async () => {
      const field = await client.content.collections.fields.update('fieldId', {
        collection_id: 'collectionId',
        name: '',
        description: '',
        validation: {
          required: false,
          unique: false,
          min: 0,
          max: 0,
          pattern: '',
          allowed_values: [],
          allowed_collections: [],
          allowed_mime_types: [],
          array_item_type: 'text',
          default_value: {},
        },
        localized: false,
        display_order: 0,
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/content/collections/{collection_id}/fields/{field_id}',
    run: async () => {
      await client.content.collections.fields.delete('fieldId', {
        collection_id: 'collectionId',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/content/entries',
    label: 'required params',
    run: async () => {
      const page = await client.content.entries.list({
        include_depth: 0,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/content/entries',
    label: 'all params',
    run: async () => {
      const page = await client.content.entries.list({
        collection: 'collection',
        status: 'draft',
        created: {
          gt: 0,
          gte: 0,
          lt: 0,
          lte: 0,
        },
        updated: {
          gt: 0,
          gte: 0,
          lt: 0,
          lte: 0,
        },
        published: {
          gt: 0,
          gte: 0,
          lt: 0,
          lte: 0,
        },
        query: 'query',
        where: 'where',
        order_by: 'orderBy',
        include_depth: 0,
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/content/entries/{entry_id}',
    run: async () => {
      const entry = await client.content.entries.get('entryId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/content/entries',
    label: 'required params',
    run: async () => {
      const entry = await client.content.entries.create({
        collection: 'x',
        fields: {},
        status: 'draft',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/content/entries',
    label: 'all params',
    run: async () => {
      const entry = await client.content.entries.create({
        id: '',
        collection: 'x',
        fields: {},
        status: 'draft',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/content/entries/{entry_id}',
    label: 'required params',
    run: async () => {
      const entry = await client.content.entries.update('entryId', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/content/entries/{entry_id}',
    label: 'all params',
    run: async () => {
      const entry = await client.content.entries.update('entryId', {
        fields: {},
        version: 0,
      });
    },
  },

  {
    operation: 'archive',
    method: 'DELETE',
    path: '/v1/content/entries/{entry_id}',
    run: async () => {
      const entry = await client.content.entries.archive('entryId');
    },
  },

  {
    operation: 'publish',
    method: 'POST',
    path: '/v1/content/entries/{entry_id}/publish',
    label: 'required params',
    run: async () => {
      const entry = await client.content.entries.publish('entryId', {});
    },
  },

  {
    operation: 'publish',
    method: 'POST',
    path: '/v1/content/entries/{entry_id}/publish',
    label: 'all params',
    run: async () => {
      const entry = await client.content.entries.publish('entryId', {
        scheduled_at: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'unpublish',
    method: 'POST',
    path: '/v1/content/entries/{entry_id}/unpublish',
    run: async () => {
      const entry = await client.content.entries.unpublish('entryId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/content/assets',
    label: 'required params',
    run: async () => {
      const page = await client.content.assets.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/content/assets',
    label: 'all params',
    run: async () => {
      const page = await client.content.assets.list({
        status: 'draft',
        mime_type: 'mimeType',
        folder: 'folder',
        created: {
          gt: 0,
          gte: 0,
          lt: 0,
          lte: 0,
        },
        query: 'query',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/content/assets/{asset_id}',
    run: async () => {
      const asset = await client.content.assets.get('assetId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/content/assets',
    label: 'required params',
    run: async () => {
      const asset = await client.content.assets.create({
        filename: '',
        mime_type: '',
        size: 0,
        metadata: {},
        folder: '/',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/content/assets',
    label: 'all params',
    run: async () => {
      const asset = await client.content.assets.create({
        id: '',
        filename: '',
        mime_type: '',
        size: 0,
        url: '',
        width: 0,
        height: 0,
        metadata: {},
        folder: '/',
        title: '',
        description: '',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/content/assets/{asset_id}',
    label: 'required params',
    run: async () => {
      const asset = await client.content.assets.update('assetId', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/content/assets/{asset_id}',
    label: 'all params',
    run: async () => {
      const asset = await client.content.assets.update('assetId', {
        url: '',
        metadata: {},
        folder: '',
        title: '',
        description: '',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/content/assets/{asset_id}',
    run: async () => {
      await client.content.assets.delete('assetId');
    },
  },

  {
    operation: 'publish',
    method: 'POST',
    path: '/v1/content/assets/{asset_id}/publish',
    run: async () => {
      const asset = await client.content.assets.publish('assetId');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/content/locales',
    label: 'required params',
    run: async () => {
      const page = await client.content.locales.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/content/locales',
    label: 'all params',
    run: async () => {
      const page = await client.content.locales.list({
        active: true,
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/content/locales/{locale_code}',
    run: async () => {
      const locale = await client.content.locales.get('localeCode');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/content/locales',
    label: 'required params',
    run: async () => {
      const locale = await client.content.locales.create({
        code: 'xx',
        name: '',
        is_default: false,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/content/locales',
    label: 'all params',
    run: async () => {
      const locale = await client.content.locales.create({
        id: '',
        code: 'xx',
        name: '',
        fallback_locale: '',
        is_default: false,
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/content/locales/{locale_code}',
    label: 'required params',
    run: async () => {
      const locale = await client.content.locales.update('localeCode', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/content/locales/{locale_code}',
    label: 'all params',
    run: async () => {
      const locale = await client.content.locales.update('localeCode', {
        name: '',
        fallback_locale: '',
        is_default: false,
        active: false,
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/content/locales/{locale_code}',
    run: async () => {
      await client.content.locales.delete('localeCode');
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/content/releases',
    label: 'required params',
    run: async () => {
      const page = await client.content.releases.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/content/releases',
    label: 'all params',
    run: async () => {
      const page = await client.content.releases.list({
        status: 'draft',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/content/releases/{release_id}',
    run: async () => {
      const release = await client.content.releases.get('releaseId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/content/releases',
    label: 'required params',
    run: async () => {
      const release = await client.content.releases.create({
        name: '',
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/content/releases',
    label: 'all params',
    run: async () => {
      const release = await client.content.releases.create({
        id: '',
        name: '',
        description: '',
      });
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/content/releases/{release_id}',
    label: 'required params',
    run: async () => {
      const release = await client.content.releases.update('releaseId', {});
    },
  },

  {
    operation: 'update',
    method: 'PATCH',
    path: '/v1/content/releases/{release_id}',
    label: 'all params',
    run: async () => {
      const release = await client.content.releases.update('releaseId', {
        name: '',
        description: '',
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/content/releases/{release_id}',
    run: async () => {
      await client.content.releases.delete('releaseId');
    },
  },

  {
    operation: 'publish',
    method: 'POST',
    path: '/v1/content/releases/{release_id}/publish',
    run: async () => {
      const release = await client.content.releases.publish('releaseId');
    },
  },

  {
    operation: 'schedule',
    method: 'POST',
    path: '/v1/content/releases/{release_id}/schedule',
    run: async () => {
      const release = await client.content.releases.schedule('releaseId', {
        scheduled_at: '2024-01-01T00:00:00.000Z',
      });
    },
  },

  {
    operation: 'add',
    method: 'POST',
    path: '/v1/content/releases/{release_id}/items',
    run: async () => {
      const releaseItem = await client.content.releases.items.add('releaseId', {
        type: 'entry',
        item_id: '',
        action: 'publish',
      });
    },
  },

  {
    operation: 'remove',
    method: 'DELETE',
    path: '/v1/content/releases/{release_id}/items/{item_id}',
    run: async () => {
      await client.content.releases.items.remove('itemId', {
        release_id: 'releaseId',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/domains',
    run: async () => {
      const page = await client.domains.list();
    },
  },

  {
    operation: 'checkAvailability',
    method: 'POST',
    path: '/v1/domains/check-availability',
    run: async () => {
      const domain = await client.domains.checkAvailability({
        domains: [],
      });
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/v1/domains/search',
    label: 'required params',
    run: async () => {
      const domain = await client.domains.search({
        keyword: 'x',
      });
    },
  },

  {
    operation: 'search',
    method: 'POST',
    path: '/v1/domains/search',
    label: 'all params',
    run: async () => {
      const domain = await client.domains.search({
        keyword: 'x',
        tld_filter: [],
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/domains/purchase',
    label: 'required params',
    run: async () => {
      const purchased = await client.domains.purchased.create({
        domain_name: 'x',
        years: 1,
        autorenew: true,
      });
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/domains/purchase',
    label: 'all params',
    run: async () => {
      const purchased = await client.domains.purchased.create({
        domain_name: 'x',
        website_id: 'x',
        payment_method_id: 'x',
        years: 1,
        autorenew: true,
        idn_language: 'x',
      });
    },
  },

  {
    operation: 'confirm',
    method: 'POST',
    path: '/v1/domains/purchase/confirm',
    run: async () => {
      const purchased = await client.domains.purchased.confirm({
        invoice_id: 'x',
        domain_name: 'x',
        website_id: 'x',
        years: 1,
        autorenew: true,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/domains/purchased',
    label: 'required params',
    run: async () => {
      const page = await client.domains.purchased.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/domains/purchased',
    label: 'all params',
    run: async () => {
      const page = await client.domains.purchased.list({
        status: 'pending',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/domains/purchased/{domain_id}',
    run: async () => {
      const purchasedDomain = await client.domains.purchased.get('domainId');
    },
  },

  {
    operation: 'send',
    method: 'POST',
    path: '/v1/email',
    label: 'required params',
    run: async () => {
      const email = await client.email.send({
        from: 'x',
        to: 'user@example.com',
        subject: 'x',
      });
    },
  },

  {
    operation: 'send',
    method: 'POST',
    path: '/v1/email',
    label: 'all params',
    run: async () => {
      const email = await client.email.send({
        from: 'x',
        to: 'user@example.com',
        subject: 'x',
        html: '',
        text: '',
        cc: 'user@example.com',
        bcc: 'user@example.com',
        reply_to: 'user@example.com',
        reply_to_email_id: 'x',
        headers: {},
        attachments: [],
        tags: [],
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/email',
    label: 'required params',
    run: async () => {
      const page = await client.email.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/email',
    label: 'all params',
    run: async () => {
      const page = await client.email.list({
        query: 'query',
        from: 'from',
        to: 'to',
        'created[gt]': 1,
        'created[gte]': 1,
        'created[lt]': 1,
        'created[lte]': 1,
        sort: 'sort',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/email/{email_id}',
    run: async () => {
      const email = await client.email.get('emailId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/email/identities',
    run: async () => {
      const identity = await client.email.identities.create({
        type: 'email',
        value: 'user@example.com',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/email/identities',
    run: async () => {
      const page = await client.email.identities.list();
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/email/identities/{identity_id}',
    run: async () => {
      const identity = await client.email.identities.get('identityId');
    },
  },

  {
    operation: 'verify',
    method: 'POST',
    path: '/v1/email/identities/{identity_id}/verify',
    run: async () => {
      const identity = await client.email.identities.verify('identityId', {
        resend: false,
      });
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/email/identities/{identity_id}',
    run: async () => {
      await client.email.identities.delete('identityId');
    },
  },

  {
    operation: 'create',
    method: 'POST',
    path: '/v1/email/suppressions',
    run: async () => {
      const suppression = await client.email.suppressions.create({
        email: 'user@example.com',
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/email/suppressions',
    label: 'required params',
    run: async () => {
      const suppression = await client.email.suppressions.list({
        limit: 100,
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/email/suppressions',
    label: 'all params',
    run: async () => {
      const suppression = await client.email.suppressions.list({
        limit: 100,
        cursor: 'cursor',
        origin: 'bounce',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/email/suppressions/{suppression}',
    run: async () => {
      const suppression = await client.email.suppressions.get('suppression');
    },
  },

  {
    operation: 'delete',
    method: 'DELETE',
    path: '/v1/email/suppressions/{suppression}',
    run: async () => {
      const suppression = await client.email.suppressions.delete('suppression');
    },
  },

  {
    operation: 'batchAdd',
    method: 'POST',
    path: '/v1/email/suppressions/batch/add',
    run: async () => {
      const suppression = await client.email.suppressions.batchAdd({
        emails: [],
      });
    },
  },

  {
    operation: 'batchRemove',
    method: 'POST',
    path: '/v1/email/suppressions/batch/remove',
    label: 'required params',
    run: async () => {
      const suppression = await client.email.suppressions.batchRemove({});
    },
  },

  {
    operation: 'batchRemove',
    method: 'POST',
    path: '/v1/email/suppressions/batch/remove',
    label: 'all params',
    run: async () => {
      const suppression = await client.email.suppressions.batchRemove({
        emails: [],
        ids: [],
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/files',
    label: 'required params',
    run: async () => {
      const page = await client.files.list();
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/files',
    label: 'all params',
    run: async () => {
      const page = await client.files.list({
        mime_type: 'mimeType',
        path: 'path',
        created: {
          gt: 0,
          gte: 0,
          lt: 0,
          lte: 0,
        },
        query: 'query',
      });
    },
  },

  {
    operation: 'get',
    method: 'GET',
    path: '/v1/files/{file_id}',
    run: async () => {
      const file = await client.files.get('fileId');
    },
  },

  {
    operation: 'enable',
    method: 'POST',
    path: '/v1/push-notifications/enable',
    run: async () => {
      const pushNotification = await client.pushNotifications.enable();
    },
  },

  {
    operation: 'subscribe',
    method: 'POST',
    path: '/v1/push-notifications/subscribe',
    label: 'required params',
    run: async () => {
      const pushNotification = await client.pushNotifications.subscribe({
        visitorId: 'x',
        subscription: {
          endpoint: 'https://example.com',
          keys: {
            p256dh: 'x',
            auth: 'x',
          },
        },
      });
    },
  },

  {
    operation: 'subscribe',
    method: 'POST',
    path: '/v1/push-notifications/subscribe',
    label: 'all params',
    run: async () => {
      const pushNotification = await client.pushNotifications.subscribe({
        visitorId: 'x',
        subscriber: {},
        subscription: {
          endpoint: 'https://example.com',
          keys: {
            p256dh: 'x',
            auth: 'x',
          },
        },
      });
    },
  },

  {
    operation: 'unsubscribe',
    method: 'POST',
    path: '/v1/push-notifications/unsubscribe',
    run: async () => {
      const pushNotification = await client.pushNotifications.unsubscribe({
        secret: 'x',
      });
    },
  },

  {
    operation: 'identify',
    method: 'POST',
    path: '/v1/push-notifications/identify',
    label: 'required params',
    run: async () => {
      const pushNotification = await client.pushNotifications.identify({
        secret: 'x',
        userId: 'x',
      });
    },
  },

  {
    operation: 'identify',
    method: 'POST',
    path: '/v1/push-notifications/identify',
    label: 'all params',
    run: async () => {
      const pushNotification = await client.pushNotifications.identify({
        secret: 'x',
        userId: 'x',
        subscriber: {},
      });
    },
  },

  {
    operation: 'send',
    method: 'POST',
    path: '/v1/push-notifications/send',
    label: 'required params',
    run: async () => {
      const pushNotification = await client.pushNotifications.send({
        title: 'x',
      });
    },
  },

  {
    operation: 'send',
    method: 'POST',
    path: '/v1/push-notifications/send',
    label: 'all params',
    run: async () => {
      const pushNotification = await client.pushNotifications.send({
        visitorIds: [],
        topics: [],
        title: 'x',
        body: '',
        icon: 'https://example.com',
        badge: 'https://example.com',
        image: 'https://example.com',
        data: {},
        urgency: 'very-low',
        ttl: 0,
      });
    },
  },

  {
    operation: 'subscribe',
    method: 'POST',
    path: '/v1/push-notifications/topics/subscribe',
    run: async () => {
      const topic = await client.pushNotifications.topics.subscribe({
        visitorId: 'x',
        topics: [],
      });
    },
  },

  {
    operation: 'unsubscribe',
    method: 'POST',
    path: '/v1/push-notifications/topics/unsubscribe',
    run: async () => {
      const topic = await client.pushNotifications.topics.unsubscribe({
        visitorId: 'x',
        topics: [],
      });
    },
  },

  {
    operation: 'list',
    method: 'GET',
    path: '/v1/push-notifications/topics',
    run: async () => {
      const page = await client.pushNotifications.topics.list({
        visitorId: 'visitorId',
      });
    },
  },
];

const main = async (): Promise<void> => {
  // SCALAR_SMOKE_FILTER (comma-separated) keeps only cases whose operation name or path matches
  // one of the needles, so a caller can smoke-test a subset. With no filter, every case runs.
  const filter = process.env['SCALAR_SMOKE_FILTER'];
  const needles = filter
    ? filter
        .split(',')
        .map((needle) => needle.trim())
        .filter(Boolean)
    : [];
  const selected =
    needles.length > 0
      ? cases.filter((testCase) =>
          needles.some((needle) => testCase.operation.includes(needle) || testCase.path.includes(needle)),
        )
      : cases;

  // Run every selected case concurrently. Promise.allSettled means one failing operation never
  // blocks the others, so a single run reports the status of every endpoint.
  const settled = await Promise.allSettled(
    selected.map(async (testCase): Promise<SmokeResult> => {
      const startedAt = Date.now();
      // `label` distinguishes the required-params run from the all-params run of the same
      // operation; it is omitted entirely when the operation contributed only one case.
      const identity = {
        operation: testCase.operation,
        method: testCase.method,
        path: testCase.path,
        ...(testCase.label ? { label: testCase.label } : {}),
      };
      try {
        await testCase.run();
        return { ...identity, status: 'passed', durationMs: Date.now() - startedAt };
      } catch (error) {
        // Prefer the stack so a failure points at the failing SDK call; fall back to the message.
        const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
        return { ...identity, status: 'failed', durationMs: Date.now() - startedAt, error: message };
      }
    }),
  );

  // allSettled never rejects, but defensively map any rejected slot to a failed result.
  const results: SmokeResult[] = settled.map((result) =>
    result.status === 'fulfilled'
      ? result.value
      : {
          operation: 'unknown',
          method: '',
          path: '',
          status: 'failed',
          durationMs: 0,
          error: String(result.reason),
        },
  );
  const failed = results.filter((result) => result.status === 'failed');

  // With SCALAR_SMOKE_REPORT set, write a machine-readable report; otherwise print a table.
  const reportPath = process.env['SCALAR_SMOKE_REPORT'];
  if (reportPath) {
    writeFileSync(reportPath, JSON.stringify({ total: results.length, failed: failed.length, results }));
  } else {
    for (const result of results) {
      const suffix = result.label ? ` [${result.label}]` : '';
      if (result.status === 'passed')
        console.log(
          `\u2714 ${result.operation}${suffix} (${result.method} ${result.path}) ${result.durationMs}ms`,
        );
      else
        console.error(
          `\u2718 ${result.operation}${suffix} (${result.method} ${result.path})\n${result.error ?? ''}`,
        );
    }
    if (results.length === 0) {
      console.error('No code samples ran (empty SDK or a SCALAR_SMOKE_FILTER that matched nothing).');
    } else {
      console.log(`\n${results.length - failed.length}/${results.length} samples passed`);
    }
  }

  // An empty run (no operations, or a filter that matched nothing) is a failure, not a vacuous pass.
  if (failed.length > 0 || results.length === 0) process.exitCode = 1;
};

void main();
