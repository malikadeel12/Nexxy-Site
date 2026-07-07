"""Backend API tests for Nexxy landing page - /api/leads endpoints"""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://nexxy-crm-hub.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(api_client):
    r = api_client.get(f"{API}/")
    assert r.status_code == 200


def test_create_lead_and_persist(api_client):
    payload = {
        "name": "TEST_User",
        "email": "test_user@example.com",
        "company": "TEST_Co",
        "message": "Please contact me about Nexxy CRM.",
    }
    r = api_client.post(f"{API}/leads", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["company"] == payload["company"]
    assert data["message"] == payload["message"]
    assert "id" in data and isinstance(data["id"], str)
    assert "created_at" in data

    # GET verifies persistence and no ObjectId serialization errors
    r2 = api_client.get(f"{API}/leads")
    assert r2.status_code == 200, r2.text
    leads = r2.json()
    assert isinstance(leads, list)
    assert any(l["id"] == data["id"] for l in leads)


def test_create_lead_minimal_no_company(api_client):
    payload = {
        "name": "TEST_Minimal",
        "email": "min@example.com",
        "message": "hi",
    }
    r = api_client.post(f"{API}/leads", json=payload)
    assert r.status_code == 200, r.text
    assert r.json()["company"] == ""


def test_create_lead_missing_required(api_client):
    r = api_client.post(f"{API}/leads", json={"name": "X"})
    assert r.status_code == 422


def test_get_leads_no_objectid(api_client):
    r = api_client.get(f"{API}/leads")
    assert r.status_code == 200
    for l in r.json():
        assert "_id" not in l
