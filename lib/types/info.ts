export interface CompanyHeadquarters {
  address: string;
  city: string;
  state: string;
}

export interface CompanyInfo {
  name: string;
  founder: string;
  founded: number;
  employees: number;
  vehicles: number;
  launch_sites: number;
  test_sites: number;
  ceo: string;
  cto: string;
  coo: string;
  cto_propulsion: string;
  valuation: number;
  headquarters: CompanyHeadquarters;
  summary: string;
}

export interface ApiInfo {
  project_name: string;
  version: string;
  project_link: string;
  organization: string;
  organization_link: string;
  description: string;
}

